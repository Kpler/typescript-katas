import { PasswordValidator } from "./passwordValidation";


const validator  = new PasswordValidator();

describe("Password", () => {
    it("should have at least 8 characters", () => {
        expect(validator.validate('Ae_12345')).toBe(true);
    });

    it("should not have less than 8 characters", () => {
        expect(validator.validate('Ae_1234')).toBe(false);
    });

    it("should contain atleast 1 capital letter", () => {
        expect(validator.validate('ae_12345')).toBe(false);
    });
});