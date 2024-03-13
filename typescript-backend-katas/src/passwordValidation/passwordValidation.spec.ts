import {PasswordValidator, PasswordValidatorThree, PasswordValidatorTwo} from "./passwordValidation";

describe("The password validator for iteration one", () => {
    const passwordValidator = new PasswordValidator();
    it.each([
        ['should not have less than 8 characters', '7charas', false],
        ['should contain capital letter', '0characte_', false],
        ['should be valid with complex password', '8npCharats_', true],
        ['should contain a lower case letter', 'CHARACTER', false],
        ['should contain a number', 'CCCharats_', false],
        ['should contain an underscore', 'CCCharats5', false],
    ])('%s', (_, password, expectedResult) =>{
        const result = passwordValidator.isValid(password);
        expect(result).toBe(expectedResult)
    })
});

describe("The password validator for iteration two", () => {
    const passwordValidator = new PasswordValidatorTwo();
    it.each([
        ['should be valid when all the rules match', 'Charac6', true],
        ['should not have less than 6 characters', '7charA', false],
        ['should contain a capital letter', '7charac', false],
        ['should contain a lower case letter', '7CHARAC', false],
        ['should contain a number', 'Charach', false],
    ])('%s', (_, password, expectedResult) =>{
        const result = passwordValidator.isValid(password);
        expect(result).toBe(expectedResult)
    })
});

describe("The password validator for iteration two", () => {
    const passwordValidator = new PasswordValidatorThree();
    it.each([])('%s', (_, password, expectedResult) =>{
        const result = passwordValidator.isValid(password);
        expect(result).toBe(expectedResult)
    })
});

