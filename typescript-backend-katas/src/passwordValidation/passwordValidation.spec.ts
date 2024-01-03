import { isPasswordValid } from "./passwordValidation";

describe("Is Password Valid", () => {
    test("Given the password 'Kpler4_3ver' should return that the password is valid", () => {
        const password = 'Kpler4_3ver';
        expect(isPasswordValid(password)).toBe(true);
    });

    test("Given the password 7 characters should return that the password is not valid", () => {
        const password = 'Kpler_2';
        expect(isPasswordValid(password)).toBe(false);
    });

    test("Given the password 8 characters should return that the password is invalid", () => {
        const password = 'Kpler43_';
        expect(isPasswordValid(password)).toBe(false);
    });

    test("Given the password missing a capital letter should return that the password is invalid", () => {
        const password = 'kpler443_';
        expect(isPasswordValid(password)).toBe(false);
    });

    test("Given the password missing a lowercase letter should return that the password is invalid", () => {
        const password = 'KPLER443_';
        expect(isPasswordValid(password)).toBe(false);
    });

    test("Given the password missing a number letter should return that the password is invalid", () => {
        const password = 'KPLerAAA_';
        expect(isPasswordValid(password)).toBe(false);
    });

    test("Given the password contains only numbers and an underscore", () => {
        const password = '12345678_';
        expect(isPasswordValid(password)).toBe(false);
    })

    test("Given the password is missing an underscore", () => {
        const password = 'KPLerAAAaaa12';
        expect(isPasswordValid(password)).toBe(false);
    })
});

describe("In case of VALIDATION_2 Is Password Valid", () => {
    test("Given the password 'Kpler4_3ver' should return that the password is valid", () => {
        const password = 'Kpler4_3ver';
        expect(isPasswordValid(password,'VALIDATION_2')).toBe(true);
    });
    test("Given the password is 7 characters long should return that the password is valid", () => {
        const password = 'Kplr4_3';
        expect(isPasswordValid(password,'VALIDATION_2')).toBe(true);
    });
    test("Given the password doesnt contain a capital letter should return that password is not valid", () => {
        const password = 'kplr4_3';
        expect(isPasswordValid(password,'VALIDATION_2')).toBe(false);
    });
    test("Given the password doesnt contain a lower letter should return that password is not valid", () => {
        const password = 'KPLR4_3';
        expect(isPasswordValid(password,'VALIDATION_2')).toBe(false);
    });
    test("Given the password doesnt contain a number should return that password is not valid", () => {
        const password = 'KPLRFour_';
        expect(isPasswordValid(password,'VALIDATION_2')).toBe(false);
    });
})

describe("In case of VALIDATION_3 Is Password Valid", () => {
    test("Given the password 'Kpler4_3erqwertyu' should return that the password is valid", () => {
        const password = 'Kpler4_3erqwertyu';
        expect(isPasswordValid(password,'VALIDATION_3')).toBe(true);
    });
})

