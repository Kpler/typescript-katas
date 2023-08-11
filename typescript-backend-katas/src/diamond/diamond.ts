export function computeDiamond(diamondVariable: string): Array<String> {
    /*const charMap = {
        'a': ['a'],
        'b': ['*a', 'b*b', '*a']
    }*/

    /*
     Idea: get the difference between character a and the requested one (diamondVariable)
     to calculate the number of stars
     */
    const diffChar = diamondVariable.charCodeAt(0) - "a".charCodeAt(0);
    const result: string[] = [];
    let aChar = ''
    for (let i = 0; i < diffChar; i++) {
        aChar = aChar.concat('*');
    }
    aChar = aChar.concat('a');
    result.push(aChar);
    if (diamondVariable !== 'a') {
        let bChar = 'b';
        for (let i = 0; i < diffChar; i++) {
            bChar = bChar.concat('*');
        }
        bChar = bChar.concat('b');
        result.push(bChar);
        result.push(aChar);
    }
    return result;
}
