import Prism from 'prismjs';
import { createRequire } from 'module';

// createRequire lets us call require() from an ESM or CJS context.
// import.meta.url is provided by esbuild/tsup for the CJS build as well.
const _require = createRequire(import.meta.url);

// The prismjs component loader: loadLanguages() with no args loads all
// available language grammars from prismjs/components/.
interface PrismLanguageLoader {
  (langs?: string | string[]): void;
  silent: boolean;
}

const loadPrismLanguages: PrismLanguageLoader =
  _require('prismjs/components/');

// Track which languages have already been loaded and patched so we never pay
// the disk-read cost more than once per language per process.
const loadedLanguages = new Set<string>();

/**
 * Ensure a single language grammar is loaded and ready in Prism.
 * The first call for a given language reads the grammar from disk; subsequent
 * calls return immediately.
 */
export function ensureLanguageLoaded(lang: string): void {
  if (loadedLanguages.has(lang)) return;

  loadPrismLanguages.silent = true;
  loadPrismLanguages([lang]);
  loadedLanguages.add(lang);
}

/**
 * @deprecated Load all languages eagerly. Prefer ensureLanguageLoaded() for
 * on-demand loading. Kept for backward compatibility.
 */
export function loadLanguages(): void {
  loadPrismLanguages.silent = true;
  loadPrismLanguages();
}

export { Prism };
