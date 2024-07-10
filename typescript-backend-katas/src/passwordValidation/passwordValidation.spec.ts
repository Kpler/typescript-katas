import {isPasswordValid, PasswordValidationIteration} from "./passwordValidation";

describe("Password validation", () => {
    it("should check, that the password has more than 8 characters", () => {
        // GIVEN
        const password = '_aAfa3456789';

        // WHEN
        const result = isPasswordValid(password)

        // THEN
        expect(result).toBe(true);
    });

    it("should check, that the password has capital letters", () => {
        // GIVEN
        const password = '_aAfa3456789'

        // WHEN
        const result = isPasswordValid(password);

        // THEN
        expect(result).toBe(true);
    })

    it("should check, that the password has lowercase letters", () => {
        // GIVEN
        const password = '_aAfa3456789'

        // WHEN
        const result = isPasswordValid(password);

        // THEN
        expect(result).toBe(true);
    })

    it("should check, that the password has min. one number", () => {
        // GIVEN
        const password = '_aAfa3456789'

        // WHEN
        const result = isPasswordValid(password);

        // THEN
        expect(result).toBe(true);
    })

    it("should check, that the password has min. one underscore", () => {
        // GIVEN
        const password = '_aAfa3456789'

        // WHEN
        const result = isPasswordValid(password);

        // THEN
        expect(result).toBe(true);
    })
});

describe("Password validation class", () => {
    it("should check, that the password has more than 8 characters", () => {
        // GIVEN
        const password = '_aAfa3456789';

        // WHEN
        const pwValidatore = new PasswordValidationIteration(8)
        const result = pwValidatore.isPasswordValid(password)

        // THEN
        expect(result).toBe(true);
    });

    it("should check, that the password has capital letters", () => {
        // GIVEN
        const password = '_aAfa3456789'

        // WHEN
        const pwValidatore = new PasswordValidationIteration()
        const result = pwValidatore.isPasswordValid(password)

        // THEN
        expect(result).toBe(true);
    })

    it("should check, that the password has lowercase letters", () => {
        // GIVEN
        const password = '_aAfa3456789'

        // WHEN
        const pwValidatore = new PasswordValidationIteration()
        const result = pwValidatore.isPasswordValid(password)

        // THEN
        expect(result).toBe(true);
    })

    it("should check, that the password has min. one number", () => {
        // GIVEN
        const password = '_aAfa3456789'

        // WHEN
        const pwValidatore = new PasswordValidationIteration()
        const result = pwValidatore.isPasswordValid(password)

        // THEN
        expect(result).toBe(true);
    })

    it("should check, that the password has min. one underscore", () => {
        // GIVEN
        const password = '_aAfa3456789'

        // WHEN
        const pwValidatore = new PasswordValidationIteration()
        const result = pwValidatore.isPasswordValid(password)

        // THEN
        expect(result).toBe(true);
    })

});

