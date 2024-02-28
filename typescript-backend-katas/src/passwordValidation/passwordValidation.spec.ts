describe("Example test", () => {
    it("should sum numbers correctly", () => {
        expect(1 + 1).toBe(2);
    });
});

const validate_password = (password: string): boolean => {
    return true;
}

describe("The password validator", () => {
    if("should not have less than characters", () => {
        const result = validate_password("7charas");
    });
});
