import {ComplexPasswordValidator, PasswordValidator, SimplePasswordValidator} from "./passwordValidation";

describe("The password validator for iteration one", () => {
    const passwordValidator = new PasswordValidator();
    it.each([
        ['should not have less than 8 characters', '7charas', false],
        ['should contain capital letter', '0characte_', false],
        ['should be valid with complex password', '8Charats_', true],
        ['should contain a lower case letter', 'CHARACTER', false],
        ['should contain a number', 'CCCharats_', false],
        ['should contain an underscore', 'CCCharats5', false],
    ])('%s', (_, password, expectedResult) =>{
        const result = passwordValidator.isValid(password);
        expect(result).toBe(expectedResult)
    })
});

describe("The password validator for iteration two", () => {
    const passwordValidator = new SimplePasswordValidator();
    it.each([
        ['should not have less than 6 characters', '5Char', false],
        ['should not miss a capital letter', '5charblah', false],
        ['should not miss a lower case letter', '5CHARBLAH', false],
        ['should not miss a number', 'Charblah', false],
        ['should provide a valid password', 'Charach1', true],
    ])('%s', (_, password, expectedResult) =>{
        const result = passwordValidator.isValid(password);
        expect(result).toBe(expectedResult)
    })
});


describe("The complex password validator for iteration two validation 3", () => {
    const passwordValidator = new ComplexPasswordValidator();
    it.each([
        ['should not have less than 16 characters', '_Char', false],
        ['should not miss a capital letter', '_charblah', false],
        ['should not miss a lower case letter', '_CHARBLAH', false],
        ['should not miss a underscore', 'Charbla', false],
        ['should provide a valid password', 'Chaefaefaefaefarach_', true],
    ])('%s', (_, password, expectedResult) =>{
        const result = passwordValidator.isValid(password);
        expect(result).toBe(expectedResult)
    })
});
