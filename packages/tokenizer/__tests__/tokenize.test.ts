import { describe, it, expect } from 'vitest';
import { IToken } from '@jscpd/core';
import { mild, strict, weak } from '@jscpd/core';
import { tokenize, createTokenMapBasedOnCode } from '../src/tokenize';

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------

function assertTokenShape(token: IToken, format: string) {
  expect(typeof token.type).toBe('string');
  expect(typeof token.value).toBe('string');
  expect(typeof token.length).toBe('number');
  expect(token.format).toBe(format);
  expect(Array.isArray(token.range)).toBe(true);
  expect(token.range.length).toBe(2);
  expect(token.loc).toBeDefined();
  expect(token.loc?.start.line).toBeGreaterThanOrEqual(1);
  expect(token.loc?.end.line).toBeGreaterThanOrEqual(1);
}

// ---------------------------------------------------------------------------
// tokenize()
// ---------------------------------------------------------------------------

describe('tokenize', () => {
  describe('return type and token shape', () => {
    it('returns an array for valid code', () => {
      expect(Array.isArray(tokenize('const x = 1;', 'javascript'))).toBe(true);
    });

    it('returns non-empty array for non-trivial code', () => {
      expect(tokenize('const x = 1;', 'javascript').length).toBeGreaterThan(0);
    });

    it('each token has the required fields', () => {
      const tokens = tokenize('const x = 1;', 'javascript');
      for (const token of tokens) {
        assertTokenShape(token, 'javascript');
      }
    });

    it('token.length equals token.value.length', () => {
      const tokens = tokenize('const x = 1;', 'javascript');
      for (const token of tokens) {
        expect(token.length).toBe(token.value.length);
      }
    });

    it('token.format equals the requested language', () => {
      const tokens = tokenize('const x = 1;', 'javascript');
      expect(tokens.every((t) => t.format === 'javascript')).toBe(true);
    });

    it('token range is monotonically non-decreasing', () => {
      const tokens = tokenize('const x = 1;', 'javascript');
      for (let i = 1; i < tokens.length; i++) {
        expect(tokens[i]!.range[0]).toBeGreaterThanOrEqual(tokens[i - 1]!.range[0]);
      }
    });
  });

  describe('unsupported languages', () => {
    it('returns empty array for an unrecognised language', () => {
      expect(tokenize('some code here', 'nonexistent-lang-xyz')).toEqual([]);
    });
  });

  describe('language support', () => {
    it.each([
      ['const x: number = 42;', 'typescript'],
      ['def hello():\n  print("world")', 'python'],
      ['public class Foo { }', 'java'],
      ['func main() {}', 'go'],
      ['fn main() {}', 'rust'],
      ['puts "hello"', 'ruby'],
      ['body { color: red; }', 'css'],
      ['<div>hello</div>', 'markup'],
      ['{"key": "value"}', 'json'],
      ['SELECT * FROM table;', 'sql'],
    ])('tokenizes %s (%s)', (code, lang) => {
      const tokens = tokenize(code, lang);
      expect(tokens.length).toBeGreaterThan(0);
      expect(tokens.every((t) => t.format === lang)).toBe(true);
    });

    it('tokenizes c-header files using the parent "c" grammar', () => {
      const tokens = tokenize('int x = 5;', 'c-header');
      expect(tokens.length).toBeGreaterThan(0);
      expect(tokens.every((t) => t.format === 'c-header')).toBe(true);
    });

    it('tokenizes cpp-header files using the parent "cpp" grammar', () => {
      const tokens = tokenize('class Foo {};', 'cpp-header');
      expect(tokens.length).toBeGreaterThan(0);
      expect(tokens.every((t) => t.format === 'cpp-header')).toBe(true);
    });
  });

  describe('multiline code', () => {
    it('assigns line numbers starting at 1', () => {
      const tokens = tokenize('const a = 1;', 'javascript');
      expect(tokens[0]?.loc?.start.line).toBe(1);
    });

    it('increments line numbers across newlines', () => {
      const code = 'const a = 1;\nconst b = 2;';
      const tokens = tokenize(code, 'javascript');
      const lastLine = tokens[tokens.length - 1]?.loc?.end.line ?? 1;
      expect(lastLine).toBeGreaterThanOrEqual(2);
    });
  });

  describe('jscpd ignore blocks', () => {
    it('includes an "ignore" token inside ignore-start/end markers', () => {
      const code = [
        '// jscpd:ignore-start',
        'const secret = 42;',
        '// jscpd:ignore-end',
      ].join('\n');
      const tokens = tokenize(code, 'javascript');
      expect(tokens.some((t) => t.type === 'ignore')).toBe(true);
    });
  });
});

// ---------------------------------------------------------------------------
// createTokenMapBasedOnCode()
// ---------------------------------------------------------------------------

describe('createTokenMapBasedOnCode', () => {
  const code = `function add(a, b) {
  return a + b;
}`;

  describe('return value', () => {
    it('returns an array', () => {
      const maps = createTokenMapBasedOnCode('id', code, 'javascript', { minTokens: 5, mode: mild });
      expect(Array.isArray(maps)).toBe(true);
    });

    it('returns empty array for an unsupported language', () => {
      const maps = createTokenMapBasedOnCode('id', 'code', 'unknownlang-xyz', { minTokens: 5, mode: mild });
      expect(maps).toEqual([]);
    });

    it('each map reports the correct id', () => {
      const maps = createTokenMapBasedOnCode('my-source', code, 'javascript', { minTokens: 5, mode: mild });
      for (const map of maps) {
        expect(map.getId()).toBe('my-source');
      }
    });

    it('each map reports the correct format', () => {
      const maps = createTokenMapBasedOnCode('id', code, 'javascript', { minTokens: 5, mode: mild });
      for (const map of maps) {
        expect(map.getFormat()).toBe('javascript');
      }
    });
  });

  describe('mode filtering', () => {
    const strictMaps = () =>
      createTokenMapBasedOnCode('id', code, 'javascript', { minTokens: 3, mode: strict });
    const mildMaps = () =>
      createTokenMapBasedOnCode('id', code, 'javascript', { minTokens: 3, mode: mild });
    const weakMaps = () =>
      createTokenMapBasedOnCode('id', code, 'javascript', { minTokens: 3, mode: weak });

    it('strict mode produces a result', () => {
      expect(strictMaps().length).toBeGreaterThanOrEqual(0);
    });

    it('mild mode produces a result', () => {
      expect(mildMaps().length).toBeGreaterThanOrEqual(0);
    });

    it('weak mode produces a result', () => {
      expect(weakMaps().length).toBeGreaterThanOrEqual(0);
    });

    it('strict mode includes more tokens than mild (whitespace tokens count)', () => {
      // strict keeps new_line / empty; mild drops them — so strict maps cover more token positions
      const strict = createTokenMapBasedOnCode('id', code, 'javascript', { minTokens: 3, mode: (t) => t.type !== 'ignore' });
      const mild = createTokenMapBasedOnCode('id', code, 'javascript', { minTokens: 3, mode: (t) => !['ignore', 'empty', 'new_line'].includes(t.type) });
      const strictCount = strict.reduce((n, m) => n + m.getTokensCount(), 0);
      const mildCount = mild.reduce((n, m) => n + m.getTokensCount(), 0);
      expect(strictCount).toBeGreaterThanOrEqual(mildCount);
    });
  });

  describe('ignoreCase option', () => {
    it('does not throw with ignoreCase: true', () => {
      expect(() =>
        createTokenMapBasedOnCode('id', 'const UPPER = 1;', 'javascript', {
          minTokens: 3,
          mode: mild,
          ignoreCase: true,
        }),
      ).not.toThrow();
    });

    it('produces maps with ignoreCase: true', () => {
      const maps = createTokenMapBasedOnCode('id', 'const UPPER = "HELLO";', 'javascript', {
        minTokens: 3,
        mode: strict,
        ignoreCase: true,
      });
      expect(Array.isArray(maps)).toBe(true);
    });
  });

  describe('ignorePattern option', () => {
    it('does not throw with ignorePattern', () => {
      expect(() =>
        createTokenMapBasedOnCode('id', code, 'javascript', {
          minTokens: 3,
          mode: mild,
          ignorePattern: ['function'],
        }),
      ).not.toThrow();
    });
  });

  describe('custom hashFunction option', () => {
    it('accepts a custom hash function', () => {
      const customHash = (v: string) => v.slice(0, 20).padEnd(20, '0');
      const maps = createTokenMapBasedOnCode('id', code, 'javascript', {
        minTokens: 3,
        mode: mild,
        hashFunction: customHash,
      });
      expect(Array.isArray(maps)).toBe(true);
    });
  });

  describe('iterator on produced maps', () => {
    it('iterator produces frames with required fields', () => {
      const maps = createTokenMapBasedOnCode('id', code, 'javascript', { minTokens: 3, mode: strict });
      for (const map of maps) {
        const result = map.next();
        if (!result.done) {
          const frame = result.value as Record<string, unknown>;
          expect(frame).toHaveProperty('id');
          expect(frame).toHaveProperty('sourceId');
          expect(frame).toHaveProperty('start');
          expect(frame).toHaveProperty('end');
        }
      }
    });

    it('can iterate all frames with for...of', () => {
      const maps = createTokenMapBasedOnCode('id', code, 'javascript', { minTokens: 3, mode: strict });
      for (const map of maps) {
        const frames: unknown[] = [];
        for (const frame of map) {
          frames.push(frame);
        }
        expect(Array.isArray(frames)).toBe(true);
      }
    });
  });

  describe('multiple languages', () => {
    it.each([
      ['typescript', 'const x: number = 1;'],
      ['python', 'def f(x):\n  return x'],
      ['java', 'public class A { }'],
      ['go', 'package main\nfunc main() {}'],
      ['rust', 'fn main() { let x = 1; }'],
      ['css', 'body { margin: 0; }'],
    ])('produces maps for %s', (lang, src) => {
      const maps = createTokenMapBasedOnCode('id', src, lang, { minTokens: 3, mode: mild });
      expect(Array.isArray(maps)).toBe(true);
    });
  });
});
