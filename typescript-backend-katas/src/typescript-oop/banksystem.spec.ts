import { BankAccount, BankClass } from "./banksystem";
import { NicoCannotCount, AlexCannotCount } from "./bankerrors";

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

        expect(() => bankAccount.deposit(depositAmount)).toThrow(new NicoCannotCount(`He really cannot count! ${depositAmount} seriously?`))
        expect(bankAccount.getBalance()).toEqual(0);
    });

    it(`should throw an error when withdraw is negative`, () => {
        const withdrawnAmount = -100000;

        expect(() => bankAccount.withdraw(withdrawnAmount)).toThrow(new AlexCannotCount(`He really cannot count! ${withdrawnAmount} seriously?`))
        expect(bankAccount.getBalance()).toEqual(0);
    });

})

describe('BankClass Test', () => {
    it('should initliaze with bank accounts', () => {
        const bankAccountA = new BankAccount(0, "bankAccountA")
        const bankAccountB = new BankAccount(1, "bankAccountB")

        const bankClass = new BankClass()

        expect(bankClass.accounts.length).toEqual(0)
    })
})
