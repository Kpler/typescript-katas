import { build_diamond, get_slice } from './diamond';

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
    it('should build a diamond for letter B', () => {
        expect(build_diamond('B')).toBe(' A \nB B\n A ');
    })
})

describe('build_row', () => {
    it('should build a row for letter B', () => {
        expect(build_row('B')).toBe('B B');
    })
})