import { describe, it, expect, vi } from 'vitest';
import * as path from 'path';
import { getFilesToDetect } from '../src/files';

const fixtures = path.join(__dirname, '../../../fixtures');

const baseOptions: any = {
  path: [fixtures + '/clike/file1.c'],
  format: ['c'],
  pattern: '**/*',
  minLines: 1,
  maxLines: 10000,
  maxSize: '100mb',
  ignore: [],
  noSymlinks: false,
  absolute: false,
};

describe('getFilesToDetect', () => {
  it('single file path returns array with exactly 1 entry with content', () => {
    const files = getFilesToDetect({ ...baseOptions, path: [fixtures + '/clike/file1.c'] });
    expect(files).toHaveLength(1);
    expect(typeof files[0].content).toBe('string');
    expect(files[0].content.length).toBeGreaterThan(0);
  });

  it('directory path returns at least 2 entries', () => {
    const files = getFilesToDetect({ ...baseOptions, path: [fixtures + '/clike'] });
    expect(files.length).toBeGreaterThanOrEqual(2);
  });

  it('maxSize 1b filter returns empty array', () => {
    const files = getFilesToDetect({ ...baseOptions, maxSize: '1b' });
    expect(files).toHaveLength(0);
  });

  it('minLines 99999 filter returns empty array', () => {
    const files = getFilesToDetect({ ...baseOptions, minLines: 99999, path: [fixtures + '/clike'] });
    expect(files).toHaveLength(0);
  });

  it('debug: true with non-c format logs skip message', () => {
    const mockLog = vi.spyOn(console, 'log').mockImplementation(() => {});
    getFilesToDetect({
      ...baseOptions,
      path: [fixtures + '/clike/file1.c'],
      format: ['javascript'],
      debug: true,
    });
    expect(mockLog).toHaveBeenCalledWith(expect.stringContaining('skipped'));
    mockLog.mockRestore();
  });
});
