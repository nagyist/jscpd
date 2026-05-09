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

export function loadLanguages(): void {
  // Suppress the per-language "does not exist" console warnings emitted by the
  // component loader for any optional language IDs it cannot resolve.
  loadPrismLanguages.silent = true;
  loadPrismLanguages();
}

export { Prism };
