import {validatePassword} from "./passwordValidation";
describe("The password validator", () => {
    it("should not have less than 8 characters", () => {
        const result = validatePassword("7charas");
        expect(result).toBe(false);
    });

    it("should be valid with more than 8 characters", () => {
        const result = validatePassword("8charact");
        expect(result).toBe(true);
    });


});
