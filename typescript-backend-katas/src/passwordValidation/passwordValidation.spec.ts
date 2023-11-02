import {passwordValidator} from "./passwordValidation";

describe("Password", () => {
    it("should have at least 8 characters", () => {
        expect(passwordValidator('12345678')).toBe(true);
    });
});