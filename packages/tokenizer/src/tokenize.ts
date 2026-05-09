import { Prism, loadLanguages } from './grammar-loader';
import { FORMATS } from './formats';
import { createTokensMaps, TokensMap } from './token-map';
import { IOptions, IToken } from '@jscpd/core';

const punctuation = {
  // eslint-disable-next-line @typescript-eslint/camelcase
  new_line: /\n/,
  empty: /\s+/,
};

const initializeFormats = (): void => {
  loadLanguages();
  Object
    .keys(Prism.languages)
    .forEach((lang: string) => {
      const grammar = Prism.languages[lang];
      if (typeof grammar === 'object' && grammar !== null) {
        Prism.languages[lang] = {
          ...grammar,
          ...punctuation,
        };
      }
    });
};

initializeFormats();

/**
 * Scan the raw code string for jscpd:ignore-start / jscpd:ignore-end pairs and
 * return their character ranges.  Using indexOf() is O(n) and produces zero
 * regex-engine backtracking, making it safe to call on files of any size.
 *
 * The region spans from the beginning of the line that contains the start
 * marker to the end of the line that contains the end marker, so that the
 * surrounding comment delimiters (// … or /* … *​/) are included in the
 * ignored range regardless of comment style.
 */
function findIgnoreRegions(code: string): Array<[number, number]> {
  const regions: Array<[number, number]> = [];
  const startMarker = 'jscpd:ignore-start';
  const endMarker = 'jscpd:ignore-end';
  let searchFrom = 0;

  while (true) {
    const startIdx = code.indexOf(startMarker, searchFrom);
    if (startIdx === -1) break;

    // Extend to the beginning of the line that contains the start marker.
    const lineStart = code.lastIndexOf('\n', startIdx - 1) + 1; // 0 when not found

    const endIdx = code.indexOf(endMarker, startIdx + startMarker.length);
    if (endIdx === -1) break;

    // Extend to the end of the line that contains the end marker.
    const nlAfterEnd = code.indexOf('\n', endIdx + endMarker.length);
    const lineEnd = nlAfterEnd === -1 ? code.length : nlAfterEnd;

    regions.push([lineStart, lineEnd]);
    searchFrom = lineEnd;
  }

  return regions;
}

function getLanguagePrismName(lang: string): string {
  if (lang in FORMATS && FORMATS[lang]?.parent) {
    return FORMATS[lang]?.parent as string;
  }
  return lang;
}

export function tokenize(code: string, language: string): IToken[] {
  let length = 0;
  let line = 1;
  let column = 1;

  // Pre-scan for ignore regions using fast indexOf (no regex backtracking).
  const ignoreRegions = findIgnoreRegions(code);

  function sanitizeLangName(name: string): string {
    return name && name.replace ? name.replace('language-', '') : 'unknown';
  }

  function createTokenFromString(token: string, lang: string): IToken[] {
    return [
      {
        format: lang,
        type: 'default',
        value: token,
        length: token.length,
      } as IToken,
    ];
  }

  function calculateLocation(token: IToken, position: number): IToken {
    const result: IToken = token;
    const lines: string[] = typeof result.value === 'string' && result.value.split ? result.value.split('\n') : [];
    const newLines = lines.length - 1;
    const start = {
      line,
      column,
      position
    };
    column = newLines >= 0 ? Number(lines[lines.length - 1]?.length) + 1 : column;
    const end = {
      line: line + newLines,
      column,
      position
    };
    result.loc = {start, end};
    result.range = [length, length + result.length];
    // Mark any token that overlaps an ignore region as type 'ignore'.
    if (ignoreRegions.length > 0) {
      const tokenStart = result.range[0];
      const tokenEnd = result.range[1];
      for (const [rs, re] of ignoreRegions) {
        if (tokenStart < re && tokenEnd > rs) {
          result.type = 'ignore';
          break;
        }
      }
    }
    length += result.length;
    line += newLines;
    return result;
  }


  function createTokenFromFlatToken(token: any, lang: string): IToken[] {
    return [
      {
        format: lang,
        type: token.type,
        value: token.content,
        length: token.length,
      } as IToken,
    ];
  }

  function createTokens(token: any, lang: string): IToken[] {
    if (token.content && typeof token.content === 'string') {
      return createTokenFromFlatToken(token, lang);
    }

    if (token.content && Array.isArray(token.content)) {
      let res: IToken[] = [];
      token.content.forEach(
        (t: IToken) => (res = res.concat(createTokens(t, token.alias ? sanitizeLangName(token.alias as string) : lang))),
      );
      return res;
    }

    return createTokenFromString(token as string, lang);
  }


  let tokens: IToken[] = [];
  const prismName = getLanguagePrismName(language);
  const grammar = Prism.languages[prismName];
  if (!grammar || typeof grammar !== 'object') {
    console.warn('Warn: jscpd has issue with support of "' + prismName + '"');
    return [];
  }
  Prism.tokenize(code, grammar)
    .forEach(
      (t: any) => (tokens = tokens.concat(createTokens(t, language))),
    );
  return tokens
    .filter((t: IToken) => t.format in FORMATS)
    .map(
      (token, index) => calculateLocation(token, index)
    );
}

function setupIgnorePatterns(format: string, ignorePattern: string[]): void {
  const language = getLanguagePrismName(format);
  const extraTokens: Record<string, { pattern: RegExp; greedy: boolean }> = {};
  ignorePattern.forEach((pattern, i) => {
    extraTokens[`ignore_pattern_${i}`] = { pattern: new RegExp(pattern), greedy: false };
  });

  Prism.languages[language] = {
    ...extraTokens,
    ...Prism.languages[language],
  };
}

export function createTokenMapBasedOnCode(id: string, data: string, format: string, options: Partial<IOptions> = {}): TokensMap[] {
  const { mode, ignoreCase, ignorePattern } = options;

  const tokens: IToken[] = tokenize(data, format)
    .filter((token) => mode(token, options));

  if (ignorePattern) setupIgnorePatterns(format, options.ignorePattern || []);

  if (ignoreCase) {
    return createTokensMaps(id, data, tokens.map(
      (token: IToken): IToken => {
        token.value = token.value.toLocaleLowerCase();
        return token;
      },
    ), options);
  }

  return createTokensMaps(id, data, tokens, options);
}
