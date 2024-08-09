import { BankAccount } from "./banksystem";

describe('BankAccount Test', () => {
    let bankAccount: BankAccount;
    const defaultId = 0;
    const defaultName = 'Revolut';
    beforeEach(() => {
        bankAccount = new BankAccount(defaultId, defaultName)

    })
    it('should create a new BankAccount', () => {
        expect(bankAccount.getBalance()).toEqual(0)
        expect(bankAccount.id).toEqual(0);
        expect(bankAccount.name).toEqual('Revolut')
    });
})
