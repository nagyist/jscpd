import { IOptions, IToken } from '@jscpd/core';
import { tokenize } from '../tokenize';
import { createTokensMaps, TokensMap } from '../token-map';

function extractLang(attrs: string): string {
  const m = /\blang\s*=\s*["']([^"']+)["']/.exec(attrs);
  return m ? (m[1] ?? '').toLowerCase() : '';
}

function resolveBlockFormat(tagName: string, lang: string): string {
  switch (tagName) {
    case 'template':
      return 'markup';
    case 'script':
      return lang === 'ts' || lang === 'typescript' ? 'typescript' : 'javascript';
    case 'style':
      if (lang === 'scss') return 'scss';
      if (lang === 'less') return 'less';
      return 'css';
    default:
      return 'markup';
  }
}

function countNewlines(s: string): number {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '\n') count++;
  }
  return count;
}

export function tokenizeVue(source: string, id: string, options: Partial<IOptions>): TokensMap[] {
  const { ignoreCase } = options;
  const allTokens: IToken[] = [];

  const blockRegex = /<(template|script|style)(\s[^>]*)?>[\s\S]*?<\/\1>/gi;

  let match: RegExpExecArray | null;
  while ((match = blockRegex.exec(source)) !== null) {
    try {
      const [fullMatch, tagName, attrsRaw] = match;
      if (!tagName) continue;
      // Strip 'setup' attribute before lang extraction (handles <script setup lang="ts">)
      const attrs = attrsRaw ? attrsRaw.replace(/\bsetup\b/g, '') : '';
      const lang = extractLang(attrs);
      const resolvedFormat = resolveBlockFormat(tagName.toLowerCase(), lang);

      // Extract inner content by stripping opening and closing tags
      const openTagEnd = fullMatch.indexOf('>') + 1;
      const closeTagStart = fullMatch.lastIndexOf('</');
      if (closeTagStart <= openTagEnd) continue;

      const innerContent = fullMatch.substring(openTagEnd, closeTagStart);

      // Line offset: count newlines in source before this block's opening tag
      const lineOffset = countNewlines(source.substring(0, match.index));

      // Tokenize block content with the resolved format
      const blockTokens = tokenize(innerContent, resolvedFormat);

      // Apply line offset correction to each token
      for (const token of blockTokens) {
        if (token.loc) {
          token.loc.start.line += lineOffset;
          token.loc.end.line += lineOffset;
        }
      }

      for (const token of blockTokens) {
        allTokens.push(token);
      }
    } catch (_e) {
      // Malformed block — skip silently
    }
  }

  let processedTokens = options.mode
    ? allTokens.filter((token) => options.mode!(token, options))
    : allTokens;

  if (ignoreCase) {
    processedTokens = processedTokens.map((token) => {
      token.value = token.value.toLocaleLowerCase();
      return token;
    });
  }

  return createTokensMaps(id, source, processedTokens, options);
}
