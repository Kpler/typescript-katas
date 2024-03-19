import {PasswordValidator, SimplePasswordValidator, ComplexPasswordValidator, PermisivePasswordValidator} from "./passwordValidation";
import {ValidationError} from "./passwordValidation";

describe.each(
    [
        {
            title: "The password validator for iteration one",
            validatorFactory: () => new PasswordValidator(),
            testCases: [
                {
                    title: 'should not have less than 8 characters',
                    passwordInput: '7C_aras',
                    errors: [ValidationError.NotEnoughCharacters]
                },
                {
                    title: 'should contain capital letter',
                    passwordInput: '0characte_',
                    errors: [ValidationError.NoCapitalLetter]
                },
                {
                    title: 'should be valid with complex password',
                    passwordInput: '8Charats_',
                    errors: [],
                },                
                {
                    title: 'should contain a lower case letter',
                    passwordInput: 'CH4RACTER_',
                    errors: [ValidationError.NoLowerCaseLetter],
                },
                {
                    title: 'should contain a number',
                    passwordInput: 'CCCharats_',
                    errors: [ValidationError.NoNumber],
                },
                {
                    title: 'should contain an underscore',
                    passwordInput: 'CCCharats5',
                    errors: [ValidationError.NoUnderscore],
                },
                {
                    title: 'should contain all the errors when they all fail',
                    passwordInput: '?',
                    errors: [
                        ValidationError.NotEnoughCharacters,
                        ValidationError.NoLowerCaseLetter,
                        ValidationError.NoNumber,
                        ValidationError.NoUnderscore,
                        ValidationError.NoCapitalLetter,
                    ],
                },
            ]
        },
    ]
)("$title", ({validatorFactory, testCases}) => {
    it.each(testCases)('$title', ({ passwordInput, errors}) => {
        const result = validatorFactory().validatePassword(passwordInput);
        expect(result.getErrors()).toStrictEqual(errors);
        expect(result.isPasswordValid()).toStrictEqual(errors.length === 0);
    })
})

describe("The password validator for iteration four", () => {
    const passwordValidator = new PermisivePasswordValidator();
    it.each([
        ['should not have less than 6 characters', 'CCCharats5', [ValidationError.NoUnderscore], true],
    ])('%s', (_, password, expectedErrors, isPasswordExpectedToBeValid) =>{
       const result = passwordValidator.validatePassword(password);
       expect(result.getErrors()).toStrictEqual(expectedErrors);
       expect(result.isPasswordValid()).toBe(isPasswordExpectedToBeValid);
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


