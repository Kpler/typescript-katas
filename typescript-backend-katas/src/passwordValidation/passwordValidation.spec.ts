import {
    PasswordValidator,
    AdvancedPasswordValidator,
    ValidationResult
} from "./passwordValidation";

describe("The password validator for iteration one", () => {
    const passwordValidator = new PasswordValidator();
    it.each([
        ['should not have less than 8 characters', '7_Aaras', <ValidationResult>{isPasswordValid: false, isLongEnough: false}],
        ['should contain capital letter', '0characte_', <ValidationResult>{isPasswordValid: false, containsCapitalLetter: false}],
        ['should be valid with complex password', '8npCharats_', <ValidationResult>{isPasswordValid: true}],
        ['should contain a lower case letter', 'CHARACTER', <ValidationResult>{isPasswordValid: false, containsLowerCase: false}],
        ['should contain a number', 'CCCharats_', <ValidationResult>{isPasswordValid: false, containsANumber: false}],
        ['should contain an underscore', 'CCCharats5', <ValidationResult>{isPasswordValid: false, containsAnUnderScore: false}],
])('%s', (_, password, expectedResult) =>{
        const result = passwordValidator.isValid(password);
        expect(result).toStrictEqual(expectedResult)
        // const result = passwordValidator.isValid(password);
        // expect(result.every( (exception) => {
        //     expectedResult.include()
        // }).toBe(expectedResult)
    })
});

// describe("The password validator for iteration two", () => {
//     const passwordValidator = new BasicPasswordValidator();
//     it.each([
//         ['should be valid when all the rules match', 'Charac6', true],
//         ['should not have less than 6 characters', '7charA', false],
//         ['should contain a capital letter', '7charac', false],
//         ['should contain a lower case letter', '7CHARAC', false],
//         ['should contain a number', 'Charach', false],
//     ])('%s', (_, password, expectedResult) =>{
//         const result = passwordValidator.isValid(password);
//         expect(result).toBe(expectedResult)
//     })
// });
//
// describe("The password validator three for iteration 2", () => {
//     const passwordValidator = new AdvancedPasswordValidator();
//     it.each([
//         ['should be valid when all the rules match', 'Charac6_Charac6_', true],
//         ['should be invalid when less than 16 chars', 'Charac6_Charac6', false],
//         ['should be invalid when it does not contain a capital letter', 'charac6_charac6_', false],
//         ['should be invalid when it does not contain a lower letter', 'CHARAC6_CHARAC6_', false],
//         ['should contain an underscore', 'Charac6Charac6aa', false],
//     ])('%s', (_, password, expectedResult) =>{
//         const result = passwordValidator.isValid(password);
//         expect(result).toBe(expectedResult)
//     })
// });

