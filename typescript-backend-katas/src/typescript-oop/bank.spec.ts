import {Bank} from "./bank";
import {BankAccount} from "./banksystem";

describe('Bank Test', () => {
    it('should initialize without any bank accounts', () => {
        const bank = new Bank()

        expect(bank.accounts.length).toEqual(0)
    });

    it('should create a bank accounts given a name', () => {
        const bank = new Bank();
        bank.createAccount('Manolis');
        bank.createAccount('Emna');

        expect(bank.accounts.length).toEqual(2);
        expect(bank.accounts[0]).toStrictEqual(new BankAccount({id: 0, name: 'Manolis'}));
        expect(bank.accounts[1]).toStrictEqual(new BankAccount({id: 1, name: 'Emna'}));
    });
})
