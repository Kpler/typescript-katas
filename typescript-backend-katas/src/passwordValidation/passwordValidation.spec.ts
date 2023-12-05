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
})
