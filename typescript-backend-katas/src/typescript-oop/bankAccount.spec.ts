import { BankAccount } from "./bankAccount";

describe("Bank Account test", () => {
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

    it("should have an initial balance to 0", () => {
        // Given

        // When
        const bankAccount = new BankAccount(1, "some name");
        
        // Then
        expect(bankAccount.getBalance()).toBe(0)
    })

    it("should be able to make a deposit", () => {
        // GIVEN
        const bankAccount = new BankAccount(1, "some name");
        const amount = 100;
        
        // WHEN
        bankAccount.deposite(amount)

        // THEN
        expect(bankAccount.getBalance()).toBe(amount);
    });
});
