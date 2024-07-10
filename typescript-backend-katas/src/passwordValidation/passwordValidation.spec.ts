import {isPasswordValid} from "./passwordValidation";

describe("Password validation", () => {
    it("should check, that the password has more than 8 characters", () => {
        // GIVEN
        const password = 'aAfa3456789';

        // WHEN
        const result = isPasswordValid(password)

        // THEN
        expect(result).toBe(true);
    });

    it("should check, that the password has capital letters", () => {
        // GIVEN
        const password = 'aAfa3456789'

        // WHEN
        const result = isPasswordValid(password);

        // THEN
        expect(result).toBe(true);
    })

    it("should check, that the password has lowercase letters", () => {
        // GIVEN
        const password = 'aAfa3456789'

        // WHEN
        const result = isPasswordValid(password);

        // THEN
        expect(result).toBe(true);
    })
    
    
});
