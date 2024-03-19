import { PasswordValidator} from "./passwordValidation";
import { ValidationError } from "./passwordValidation";

describe("The password validator for iteration one", () => {
    const passwordValidator = new PasswordValidator();
    it.each([
        ['should not have less than 8 characters', '7C_aras', [ValidationError.NotEnoughCharacters]],
        ['should contain capital letter', '0characte_', [ValidationError.NoCapitalLetter]],
        ['should be valid with complex password', '8Charats_', []],
        ['should contain a lower case letter', 'CH4RACTER_', [ValidationError.NoLowerCaseLetter]],
        ['should contain a number', 'CCCharats_', [ValidationError.NoNumber]],
        ['should contain an underscore', 'CCCharats5', [ValidationError.NoUnderscore]],
    ])('%s', (_, password, expectedResult) =>{
        const result = passwordValidator.validatePassword(password);
        expect(result).toStrictEqual(expectedResult)
    })
});

// describe("The password validator for iteration two", () => {
//     const passwordValidator = new SimplePasswordValidator();
//     it.each([
//         ['should not have less than 6 characters', '5Char', {result : false, message: "Wrong password"}],
//         ['should not miss a capital letter', '5charblah', {result : false, message: "Wrong password"}],
//         ['should not miss a lower case letter', '5CHARBLAH', {result : false, message: "Wrong password"}],
//         ['should not miss a number', 'Charblah', {result : false, message: "Wrong password"}],
//         ['should provide a valid password', 'Charach1', {result : true, message: "Password Valid"}],
//     ])('%s', (_, password, expectedResult) =>{
//         const result = passwordValidator.validatePassword(password);
//         expect(result).toStrictEqual(expectedResult)
//     })
// });


// describe("The complex password validator for iteration two validation 3", () => {
//     const passwordValidator = new ComplexPasswordValidator();
//     it.each([
//         ['should not have less than 16 characters', '_Char', {result : false, message: "Wrong password"}],
//         ['should not miss a capital letter', '_charblah', {result : false, message: "Wrong password"}],
//         ['should not miss a lower case letter', '_CHARBLAH', {result : false, message: "Wrong password"}],
//         ['should not miss a underscore', 'Charbla', {result : false, message: "Wrong password"}],
//         ['should provide a valid password', 'Chaefaefaefaefarach_', {result : true, message: "Password Valid"}],
//     ])('%s', (_, password, expectedResult) =>{
//         const result = passwordValidator.validatePassword(password);
//         expect(result).toStrictEqual(expectedResult)
//     })
// });