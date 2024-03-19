import {PasswordValidator, SimplePasswordValidator, ComplexPasswordValidator} from "./passwordValidation";
import {ValidationError} from "./passwordValidation";

describe("The password validator for iteration one", () => {
    const passwordValidator = new PasswordValidator();
    it.each([
        ['should not have less than 8 characters', '7C_aras', [ValidationError.NotEnoughCharacters]],
        ['should contain capital letter', '0characte_', [ValidationError.NoCapitalLetter]],
        ['should be valid with complex password', '8Charats_', []],
        ['should contain a lower case letter', 'CH4RACTER_', [ValidationError.NoLowerCaseLetter]],
        ['should contain a number', 'CCCharats_', [ValidationError.NoNumber]],
        ['should contain an underscore', 'CCCharats5', [ValidationError.NoUnderscore]],
        [
            'should contain all the errors when they all fail',
            '?',
            [
                ValidationError.NotEnoughCharacters,
                ValidationError.NoLowerCaseLetter,
                ValidationError.NoNumber,
                ValidationError.NoUnderscore,
                ValidationError.NoCapitalLetter,
            ]
        ],
    ])('%s', (_, password, expectedErrors) => {
        const result = passwordValidator.validatePassword(password);
        expect(result.getErrors()).toStrictEqual(expectedErrors);
        expect(result.isPasswordValid()).toStrictEqual(expectedErrors.length === 0);
    })
});

 describe("The password validator for iteration two", () => {
     const passwordValidator = new SimplePasswordValidator();
     it.each([
         ['should not have less than 6 characters', '5Cha_', [ValidationError.NotEnoughCharacters]],
         ['should not miss a capital letter', '5charb_ah', [ValidationError.NoCapitalLetter]],
         ['should not miss a lower case letter', '5CHARB_AH', [ValidationError.NoLowerCaseLetter]],
         ['should not miss a number', 'Charblah', [ValidationError.NoNumber]],
         ['should provide a valid password', 'Charach1', []],
     ])('%s', (_, password, expectedErrors) =>{
        const result = passwordValidator.validatePassword(password);
        expect(result.getErrors()).toStrictEqual(expectedErrors);
        expect(result.isPasswordValid()).toStrictEqual(expectedErrors.length === 0);
     })
 });


describe("The complex password validator for iteration two validation 3", () => {
     const passwordValidator = new ComplexPasswordValidator();
     it.each([
         ['should not have less than 16 characters', '_Char', [ValidationError.NotEnoughCharacters]],
         ['should not miss a capital letter', '_charblah', [ValidationError.NotEnoughCharacters, ValidationError.NoCapitalLetter]],
         ['should not miss a lower case letter', '_CHARBLAH', [ValidationError.NotEnoughCharacters, ValidationError.NoLowerCaseLetter]],
         ['should not miss a underscore', 'Charbla', [ValidationError.NotEnoughCharacters, ValidationError.NoUnderscore]],
         ['should provide a valid password', 'Chaefaefaefaefarach_', []],
     ])('%s', (_, password, expectedErrors) =>{
        const result = passwordValidator.validatePassword(password);
        expect(result.getErrors()).toStrictEqual(expectedErrors);
        expect(result.isPasswordValid()).toStrictEqual(expectedErrors.length === 0);
     })
});
