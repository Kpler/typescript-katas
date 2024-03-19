import {
    ComplexPasswordValidator,
    PasswordValidator,
    SimplePasswordValidator,
    InValidPasswordResponse,
    ValidPasswordResponse
} from "./passwordValidation";

describe("The password validator for iteration one", () => {
    const passwordValidator = new PasswordValidator();
    it.each([
    ['should not have less than 8 characters', '7charas', new InValidPasswordResponse(["Wrong password"]),
        ['should contain capital letter', '0characte_', new InValidPasswordResponse(["Wrong password"])],
        ['should be valid with complex password', '8Charats_', new ValidPasswordResponse()],
        ['should contain a lower case letter', 'CHARACTER', new InValidPasswordResponse(["Wrong password"])],
        ['should contain a number', 'CCCharats_', new InValidPasswordResponse(["Wrong password"])],
        ['should contain an underscore', 'CCCharats5', new InValidPasswordResponse(["Wrong password"])],
    ])('%s', (_, password, expectedResult) =>{
        const result = passwordValidator.validatePassword(password);
        expect(result).toStrictEqual(expectedResult)
    })
});

describe("The password validator for iteration two", () => {
    const passwordValidator = new SimplePasswordValidator();
    it.each([
        ['should not have less than 6 characters', '5Char', new InValidPasswordResponse(["Wrong password"])],
        ['should not miss a capital letter', '5charblah', new InValidPasswordResponse(["Wrong password"])],
        ['should not miss a lower case letter', '5CHARBLAH', new InValidPasswordResponse(["Wrong password"])],
        ['should not miss a number', 'Charblah', new InValidPasswordResponse(["Wrong password"])],
        ['should provide a valid password', 'Charach1', new ValidPasswordResponse()],
    ])('%s', (_, password, expectedResult) =>{
        const result = passwordValidator.validatePassword(password);
        expect(result).toStrictEqual(expectedResult)
    })
});


describe("The complex password validator for iteration two validation 3", () => {
    const passwordValidator = new ComplexPasswordValidator();
    it.each([
        ['should not have less than 16 characters', '_Char', new InValidPasswordResponse(["Wrong password"])],
        ['should not miss a capital letter', '_charblahblahblah', new InValidPasswordResponse(["Wrong password"])],
        ['should not miss a lower case letter', '_CHARBLAHBLAHBLAH', new InValidPasswordResponse(["Wrong password"])],
        ['should not miss a underscore', 'Charblahblahblah', new InValidPasswordResponse(["Wrong password"])],
        ['should provide a valid password', 'Chaefaefaefaefarach_', new ValidPasswordResponse()],
    ])('%s', (_, password, expectedResult) =>{
        const result = passwordValidator.validatePassword(password);
        expect(result).toStrictEqual(expectedResult)
    })
});