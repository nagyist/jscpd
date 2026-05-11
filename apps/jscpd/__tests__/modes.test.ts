import {describe, beforeEach, afterEach, expect, it} from "vitest";
import {IClone} from '@jscpd/core';
import {jscpd} from '../src';

const pathToFixtures = __dirname + '/../../../fixtures/modes';
describe('jscpd modes', () => {

	let _log;

	beforeEach(() => {
		_log = console.log;
		console.log = () => {
		};
	})

	afterEach(() => {
		console.log = _log;
	})

	describe('strict mode', () => {
		it('should detect clones with strict mode, ignore just symbols marked for ignore', async () => {
			const clones: IClone[] = await jscpd(['', '', pathToFixtures, '-m', 'strict']);
			const clone: IClone = clones[0];
			expect(clone.duplicationA.start.line).to.equal(17);
			expect(clone.duplicationA.end.line).to.equal(93);
			expect(clone.duplicationB.start.line).to.equal(11);
			expect(clone.duplicationB.end.line).to.equal(87);
		})
	});

	describe('weak mode', () => {
		it('should detect clones with weak mode, ignore new line and empty symbols and comments', async () => {
			const clones: IClone[] = await jscpd(['', '', pathToFixtures, '-m', 'weak']);
			const clone: IClone = clones[0];
			expect(clone.duplicationA.start.line).to.equal(9);
			expect(clone.duplicationA.end.line).to.equal(92);
			expect(clone.duplicationB.start.line).to.equal(9);
			expect(clone.duplicationB.end.line).to.equal(86);
		})
	});

	describe('weak mode (Vue files - issue #788)', () => {
		const pathToVueFixtures = pathToFixtures + '/vue';
		// Fixtures contain all Vue/TS comment types:
		//   - TypeScript single-line (//)
		//   - TypeScript multi-line (/* */)
		//   - TypeScript JSDoc (/** */)
		//   - HTML single-line (<!-- -->)
		//   - HTML multi-line (<!-- ... -->)
		// Both files share an identical copyright block (26 tokens in mild, 19 in weak).
		// min-tokens=20 sits between those counts so mild detects the clone and weak does not.
		it('should suppress comment-only clones in Vue SFCs with weak mode', async () => {
			const clones: IClone[] = await jscpd([
				'', '',
				pathToVueFixtures,
				'-m', 'weak',
				'--min-tokens', '20',
				'--min-lines', '1',
			]);
			expect(clones.length).to.equal(0);
		});
		it('should detect comment clones in Vue SFCs with mild mode', async () => {
			const clones: IClone[] = await jscpd([
				'', '',
				pathToVueFixtures,
				'-m', 'mild',
				'--min-tokens', '20',
				'--min-lines', '1',
			]);
			expect(clones.length).to.equal(1);
			expect(clones[0].duplicationA.start.line).to.equal(1);
		});
	});

	describe('not exist mode', () => {
		it('should not run ', async () => {
			try {
				await jscpd(['', '', pathToFixtures, '-m', 'zzz']);
			} catch (e) {
				expect(e.message).to.equal(`Mode zzz does not supported yet.`);
			}
		})
	});
});
