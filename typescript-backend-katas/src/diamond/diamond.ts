const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


export function build_diamond(letter: string): string {
    const letters = get_slice(letter)
    row = ""
    for (let i = 0; i < letters.length; i++) {
        row
    }

}

export function get_slice(letter: string): string {
    const index = ALPHABETS.indexOf(letter)
    return ALPHABETS.slice(0, index + 1)
}

export function build_row(letter: string, letterCount: number): string {
    const index = ALPHABETS.indexOf(letter);
    const spaces_in_between = index * 2 + 1;
    const spaces_on_the_edge = //

    return `${spaces_on_the_edge}${letter}${spaces_in_between}${letter}${spaces_on_the_edge}`;
}
