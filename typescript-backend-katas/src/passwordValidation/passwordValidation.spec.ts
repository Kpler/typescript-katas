import { PasswordValidator, VALIDATORS, BuilderValidator } from "./passwordValidation";

describe("Validator 1: Password", () => {
    let validator : PasswordValidator;
    beforeEach(() => {
        validator  = BuilderValidator.buildValidatorOne();
    });
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

describe("Validator 2: Password", () => {
    let validator : PasswordValidator;

    beforeEach(() => {
        validator  = BuilderValidator.buildValidatorTwo();
    });
    it("should have at least 6 characters", () => {
        expect(validator.validate('Ae1234')).toBe(true);
    });

    it("should not have less than 6 characters", () => {
        expect(validator.validate('Ae123')).toBe(false);
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
});
