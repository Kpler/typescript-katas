import { build_diamond, build_row, get_slice } from './diamond';

describe('get_alphabet_index', () => {
    it('should return the first slice  of the alphabet for a letter', () => {
        expect(get_slice('C')).toBe('ABC');
        expect(get_slice('D')).toBe('ABCD');
    })
})

describe('diamond', () => {
    it('should build a diamond for letter A', () => {
        expect(build_diamond('A')).toBe('A');
    })
    it.skip('should build a diamond for letter B', () => {
        expect(build_diamond('B')).toBe(' A \nB B\n A ');
    })
    it.skip('should build a diamond for letter C', () => {
        expect(build_diamond('C')).toBe('  A  \n B B \nC   C\n B B \n  A  ');
    })
    it.skip('should build a diamond for letter D', () => {
        expect(build_diamond('D')).toBe('   A   \n  B B  \n C   C \nD     D\n C   C \n  B B  \n   A   ');
    })
})

describe('build_row', () => {
    it('should build a row for letter A in a B diamond', () => {
        expect(build_row('A', 2)).toBe(' A ');
    })
    it('should build a row for letter B in a B diamond', () => {
        expect(build_row('B', 2)).toBe('B B');
    })
    it('should build a row for letter B in a C diamond', () => {
        expect(build_row('B', 3)).toBe(' B B ');
    })
    it('should build a row for letter C in a C diamond', () => {
        expect(build_row('C', 3)).toBe('C   C');
    })
})