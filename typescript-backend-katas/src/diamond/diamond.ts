export function computeDiamond(diamondVariable: string): Array<String> {

    const result: string[] = [];
    let currentLine = '';

    for(const letter of LETTERS) {
        currentLine = '';
        const starLength = LETTERS.indexOf(diamondVariable) - LETTERS.indexOf(letter);
        if (letter !== diamondVariable) {
            console.log(starLength);
            currentLine = computeStars(starLength, currentLine);
        }
        currentLine = currentLine.concat(letter);

        if (letter !== 'a') {
            const tmp = LETTERS.indexOf(diamondVariable) - LETTERS.indexOf(letter);
            currentLine = computeStars(starLength, currentLine);
            currentLine = currentLine.concat(letter);
            result.push(currentLine);
        } else {
            result.push(currentLine);
        }

        if (letter == diamondVariable) {
            break;
        }

    }

    const secondDiamondPart = result.slice(0, result.length - 1).reverse()

    result.push(...secondDiamondPart);

    return result;
}

function computeStars(diffChar: number, inputLetter: string) : string {
    for (let i = 0; i < diffChar; i++) {
        inputLetter = inputLetter.concat('*');
    }

    return inputLetter;
}

const LETTERS: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
