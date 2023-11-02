import { passwordValidator } from "./passwordValidation";

describe("Password", () => {
    it("should have at least 8 characters", () => {
        expect(passwordValidator('Ae_12345')).toBe(true);
    });

    it("should not have less than 8 characters", () => {
        expect(passwordValidator('Ae_1234')).toBe(false);
    });

    it("should contain atleast 1 capital letter", () => {
        expect(passwordValidator('ae_12345')).toBe(false);
    });
});