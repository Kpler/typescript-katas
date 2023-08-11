export function computeDiamond(diamondVariable: string): Array<String> {
    /*const charMap = {
        'a': ['a'],
        'b': ['*a', 'b*b', '*a']
    }*/

    /*
     Idea: get the difference between character a and the requested one (diamondVariable)
     to calculate the number of stars
     */
    const count = "b".charCodeAt(0);
    const diffChar = diamondVariable.charCodeAt(0) - "a".charCodeAt(0)
    console.log(count);

    return [diamondVariable]
}
