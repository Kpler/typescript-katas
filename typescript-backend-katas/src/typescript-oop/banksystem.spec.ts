import { BankAccount } from "./banksystem";

describe('BankAccount Test', () => {
    it('should create a new BankAccount', () => {
        const bankAccount = new BankAccount()
        expect(bankAccount.getBalance()).toEqual(0)
    });
})
