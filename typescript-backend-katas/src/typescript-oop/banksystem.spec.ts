import {BankAccount, NicoCannotCount} from "./banksystem";

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

    it('should deposit a given amount', () => {
        const depositAmount = 100000;
        bankAccount.deposit(depositAmount)
        expect(bankAccount.getBalance()).toEqual(depositAmount)
    });

    it('should withdraw a given amount', () => {
        const withdrawnAmount = 100000;
        bankAccount.withdraw(withdrawnAmount)
        expect(bankAccount.getBalance()).toEqual(-100000)
    });

    it('should deposit and withdraw money', () => {
        const depositAmount = 100000;
        const depositAmount2 = 500;
        const withdrawnAmount = 100000;
        bankAccount.deposit(depositAmount)
        bankAccount.deposit(depositAmount2)
        bankAccount.withdraw(withdrawnAmount)
        expect(bankAccount.getBalance()).toEqual(500)
    });

    it('should deposit not be negative', () => {
        const depositAmount = -100000;

        expect(() => bankAccount.deposit(depositAmount)).toThrow(new NicoCannotCount("He really cannot count!"))
    });

})
