export function computeDiamond(diamondVariable: string): Array<String> {
    
    const letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    /*const charMap = {
        'a': ['a'],
        'b': ['*a', 'b*b', '*a']
    }*/

    /*
     Idea: get the difference between character a and the requested one (diamondVariable)
     to calculate the number of stars
     */
    const result: string[] = [];
    for(const letter in letters) {
        let tempChar = '';
        const diffChar = letters.indexOf(letter);
        for (let i = 0; i < diffChar; i++) {
            tempChar = tempChar.concat('*');
        }
        tempChar = tempChar.concat(letter);

        if (diamondVariable !== 'a') {
            let bChar = 'b';
            for (let i = 0; i < diffChar; i++) {
                bChar = bChar.concat('*');
            }
            bChar = bChar.concat('b');
            result.push(bChar);
            result.push(aChar);
        }
        if (letter == diamondVariable) {
            
        }
        result.push(aChar);
    }
    return result;
}
