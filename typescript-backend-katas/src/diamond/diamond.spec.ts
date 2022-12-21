import { build_diamond } from './diamond';

describe('diamond', () => {
    it('should build a diamond for letter A', () => {
        expect(build_diamond('A')).toBe('A');
    })
})