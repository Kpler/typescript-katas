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

export function build_row(letter: string, max_size): string {
    const letters = get_slice(letter)
    row = ""
    for (let i = 0; i < letters.length; i++) {
        row
    }

}
