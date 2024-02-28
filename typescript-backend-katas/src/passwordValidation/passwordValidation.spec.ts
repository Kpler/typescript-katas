import {isPasswordValid} from "./passwordValidation";

describe("The password validator", () => {
    it.each([
        ['should not have less than 8 characters', '7charas', false],
        ['should contain capital letter', 'characte', false],
        ['should be valid with complex password', '8Charats_', true],
        ['should contain a lower case letter', 'CHARACTER', false]
    ])('%s', (_, password, expectedResult) =>{
        const result = isPasswordValid(password);
        expect(result).toBe(expectedResult)
    })
});
