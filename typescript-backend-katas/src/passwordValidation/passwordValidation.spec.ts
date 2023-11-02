import { PasswordValidator } from "./passwordValidation";


const validator  = new PasswordValidator();

describe("Password", () => {
    it("should have at least 8 characters", () => {
        expect(validator.validate('Ae_12345')).toBe(true);
    });

    it("should not have less than 8 characters", () => {
        expect(validator.validate('Ae_1234')).toBe(false);
    });

    it("should contain at least 1 capital letter", () => {
        expect(validator.validate('ae_12345')).toBe(false);
    });

    it("should contain at least 1 lower case letter", () => {
        expect(validator.validate('AE_12345')).toBe(false);
    });

    it("should contain at least 1 number", () => {
        expect(validator.validate('AE_qwertyuiop')).toBe(false);
    });

    it("should contain at least 1 underscore", () => {
        expect(validator.validate('AEq123456')).toBe(false);
    });
});