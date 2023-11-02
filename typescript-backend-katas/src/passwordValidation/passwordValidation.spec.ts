import { PasswordValidator, VALIDATORS } from "./passwordValidation";

describe("Validator 1: Password", () => {
    it("should have at least 8 characters", () => {
        const validator  = new PasswordValidator(VALIDATORS[0]);
        expect(validator.validate('Ae_12345')).toBe(true);
    });

    it("should not have less than 8 characters", () => {
        const validator  = new PasswordValidator(VALIDATORS[0]);
        expect(validator.validate('Ae_1234')).toBe(false);
    });

    it("should contain at least 1 capital letter", () => {
        const validator  = new PasswordValidator(VALIDATORS[0]);
        expect(validator.validate('ae_12345')).toBe(false);
    });

    it("should contain at least 1 lower case letter", () => {
        const validator  = new PasswordValidator(VALIDATORS[0]);
        expect(validator.validate('AE_12345')).toBe(false);
    });

    it("should contain at least 1 number", () => {
        const validator  = new PasswordValidator(VALIDATORS[0]);
        expect(validator.validate('AE_qwertyuiop')).toBe(false);
    });

    it("should contain at least 1 underscore", () => {
        const validator  = new PasswordValidator(VALIDATORS[0]);
        expect(validator.validate('AEq123456')).toBe(false);
    });
});

describe("Validator 2: Password", () => {
    it("should have at least 6 characters", () => {
        const validator  = new PasswordValidator(VALIDATORS[1]);
        expect(validator.validate2('Ae1234')).toBe(true);
    });

    it("should not have less than 6 characters", () => {
        const validator  = new PasswordValidator(VALIDATORS[1]);
        expect(validator.validate2('Ae123')).toBe(false);
    });

    it("should contain at least 1 capital letter", () => {
        const validator  = new PasswordValidator(VALIDATORS[1]);
        expect(validator.validate2('ae_12345')).toBe(false);
    });

    it("should contain at least 1 lower case letter", () => {
        const validator  = new PasswordValidator(VALIDATORS[1]);
        expect(validator.validate2('AE_12345')).toBe(false);
    });

    it("should contain at least 1 number", () => {
        const validator  = new PasswordValidator(VALIDATORS[1]);
        expect(validator.validate2('AE_qwertyuiop')).toBe(false);
    });
});
