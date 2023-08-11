export function computeDiamond(diamondVariable: string): Array<String> {
    
    const letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const result: string[] = [];
    let tempChar = '';

    function computeStars(diffChar: number) {
        for (let i = 0; i < diffChar; i++) {
            tempChar = tempChar.concat('*');
        }
    }

    for(const letter of letters) {
        tempChar = '';
        const diffChar = letters.indexOf(diamondVariable) - letters.indexOf(letter);
        if (letter !== diamondVariable) {
            computeStars(diffChar);
        }
        tempChar = tempChar.concat(letter);
        console.log(tempChar);

        if (letter !== 'a') {

            computeStars(diffChar);
            tempChar = tempChar.concat(letter);
            result.push(tempChar);
        } else {
            result.push(tempChar);
        }
        if (letter == diamondVariable) {
            break;
        }

    }

    return result;
}
