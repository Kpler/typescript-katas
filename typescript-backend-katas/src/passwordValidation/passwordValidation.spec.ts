import { isPasswordValid } from "./passwordValidation";


describe("Given the password 'Kpler4_3ver'", () => {
    it("should return that the password is valid", () => {
        const password = 'Kpler4_3ver';
        expect(isPasswordValid(password)).toBe(true);
    });
});

describe("Given the password 'Kpler_2'", () => {
    it("should return that the password is not valid", () => {
        const password = 'Kpler_2';
        expect(isPasswordValid(password)).toBe(false);
    });
});

describe("Given the password 'Kpler43_'", () => {
    it("should return that the password is invalid", () => {
        const password = 'Kpler43_';
        expect(isPasswordValid(password)).toBe(false);
    });
});
