import { build_diamond } from './diamond';

describe('get_alphabet_index', () => {
    it('should return the index for an alphabet', () => {
        expect(get_alphabet_index).toBe('A');
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