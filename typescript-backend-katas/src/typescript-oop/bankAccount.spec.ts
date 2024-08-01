import { BankAccount } from "./bankAccount";

describe("Example test", () => {
    it("should create a new BankAccount", () => {
        // GIVEN
        const exampleId = 1;
        const exampleName = 'Some Name';

        // WHEN
        const newBankAccount = new BankAccount(exampleId, exampleName);

        // THEN
        expect(newBankAccount.id).toBe(exampleId);
        expect(newBankAccount.name).toBe(exampleName);
    });
});