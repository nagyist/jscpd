import { describe, it, expect } from 'vitest';
import { FORMATS, getSupportedFormats, getFormatByFile } from '../src/formats';

describe('FORMATS', () => {
  it('contains expected language entries', () => {
    expect(FORMATS).toHaveProperty('javascript');
    expect(FORMATS).toHaveProperty('typescript');
    expect(FORMATS).toHaveProperty('python');
    expect(FORMATS).toHaveProperty('java');
    expect(FORMATS).toHaveProperty('go');
    expect(FORMATS).toHaveProperty('ruby');
    expect(FORMATS).toHaveProperty('rust');
    expect(FORMATS).toHaveProperty('astro');
  });

  it('every entry has an exts array', () => {
    for (const [name, meta] of Object.entries(FORMATS)) {
      expect(Array.isArray(meta.exts), `${name}.exts should be an array`).toBe(true);
    }
  });

  it('c-header has parent c', () => {
    expect(FORMATS['c-header']?.parent).toBe('c');
  });

  it('cpp-header has parent cpp', () => {
    expect(FORMATS['cpp-header']?.parent).toBe('cpp');
  });

  it('formats without a parent have no parent field', () => {
    expect(FORMATS['javascript']?.parent).toBeUndefined();
    expect(FORMATS['typescript']?.parent).toBeUndefined();
  });
});

describe('getSupportedFormats', () => {
  it('returns an array', () => {
    expect(Array.isArray(getSupportedFormats())).toBe(true);
  });

  it('is not empty', () => {
    expect(getSupportedFormats().length).toBeGreaterThan(0);
  });

  it('excludes "url"', () => {
    expect(getSupportedFormats()).not.toContain('url');
  });

  it('excludes "important"', () => {
    expect(getSupportedFormats()).not.toContain('important');
  });

  it('includes common languages', () => {
    const formats = getSupportedFormats();
    ['javascript', 'typescript', 'python', 'java', 'go', 'ruby', 'rust', 'css', 'markup'].forEach((lang) => {
      expect(formats).toContain(lang);
    });
  });

  it('includes parent-aliased formats', () => {
    const formats = getSupportedFormats();
    expect(formats).toContain('c-header');
    expect(formats).toContain('cpp-header');
  });
});

describe('getFormatByFile', () => {
  it.each([
    ['file.js', 'javascript'],
    ['file.ts', 'typescript'],
    ['file.py', 'python'],
    ['file.java', 'java'],
    ['file.go', 'go'],
    ['file.rb', 'ruby'],
    ['file.rs', 'rust'],
    ['file.cs', 'csharp'],
    ['file.cpp', 'cpp'],
    ['file.c', 'c'],
    ['file.h', 'c-header'],
    ['file.hpp', 'cpp-header'],
    ['file.css', 'css'],
    ['file.scss', 'scss'],
    ['file.html', 'markup'],
    ['file.xml', 'markup'],
    ['file.json', 'json'],
    ['file.yaml', 'yaml'],
    ['file.yml', 'yaml'],
    ['file.sh', 'bash'],
    ['file.kt', 'kotlin'],
    ['file.swift', 'swift'],
    ['file.php', 'php'],
    ['file.scala', 'scala'],
    ['file.tsx', 'tsx'],
    ['file.jsx', 'jsx'],
    ['file.sql', 'sql'],
    ['file.lua', 'lua'],
    ['file.dart', 'dart'],
    ['file.md', 'markdown'],
    ['file.vue', 'vue'],
    ['file.astro', 'astro'],
  ])('returns %s for %s', (filename, expectedFormat) => {
    expect(getFormatByFile(filename)).toBe(expectedFormat);
  });

  it('handles full absolute paths', () => {
    expect(getFormatByFile('/home/user/project/src/index.ts')).toBe('typescript');
    expect(getFormatByFile('/var/app/main.go')).toBe('go');
  });

  it('handles relative paths with directories', () => {
    expect(getFormatByFile('src/components/Button.tsx')).toBe('tsx');
  });

  it('returns undefined for unknown extensions', () => {
    expect(getFormatByFile('file.unknownxyz')).toBeUndefined();
  });

  it('returns undefined for files with no extension', () => {
    expect(getFormatByFile('Makefile')).toBeUndefined();
  });

  it('uses custom formatsExts when provided and non-empty', () => {
    const customFormats = { myformat: ['xyz', 'abc'] };
    expect(getFormatByFile('file.xyz', customFormats)).toBe('myformat');
    expect(getFormatByFile('file.abc', customFormats)).toBe('myformat');
  });

  it('custom formatsExts takes precedence over FORMATS', () => {
    // override .js to a custom format
    const customFormats = { custom: ['js'] };
    expect(getFormatByFile('file.js', customFormats)).toBe('custom');
  });

  it('falls back to FORMATS when formatsExts is an empty object', () => {
    expect(getFormatByFile('file.js', {})).toBe('javascript');
  });

  it('returns undefined for custom formatsExts with no matching extension', () => {
    const customFormats = { myformat: ['xyz'] };
    expect(getFormatByFile('file.js', customFormats)).toBeUndefined();
  });
});
