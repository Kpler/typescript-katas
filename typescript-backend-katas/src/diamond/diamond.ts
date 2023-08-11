export function computeDiamond(diamondVariable: string): Array<String> {
    
    const letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const result: string[] = [];
    let tempChar = '';

    function computeStars(diffChar: number, tempChar: string) : string {
        for (let i = 0; i < diffChar; i++) {
            tempChar = tempChar.concat('*');
        }

        return tempChar;
    }

    for(const letter of letters) {
        tempChar = '';
        const diffChar = letters.indexOf(diamondVariable) - letters.indexOf(letter);
        if (letter !== diamondVariable) {
            tempChar = computeStars(diffChar, tempChar);
        }
        tempChar = tempChar.concat(letter);

        if (letter !== 'a') {
            tempChar = computeStars(diffChar + 1, tempChar);
            tempChar = tempChar.concat(letter);
            result.push(tempChar);
        } else {
            result.push(tempChar);
        }

        if (letter == diamondVariable) {
            break;
        }

    }

    const secondDiamondPart = result.slice(0, result.length - 1).reverse()

    result.push(...secondDiamondPart);

    return result;
}
