import {Bank} from "./bank";

describe('Bank Test', () => {
    it('should initialize without any bank accounts', () => {
        const bank = new Bank()

        expect(bank.accounts.length).toEqual(0)
    });

    it('should create a bank accounts given a name', () => {
        const bank = new Bank();
        bank.createAccount('Manolis');
        bank.createAccount('Emna');

        expect(bank.accounts.length).toEqual(1);
        expect(bank.accounts[0].name).toBe('Manolis');
        expect(bank.accounts[0].id).toBe(0);
        expect(bank.accounts[1].name).toBe('Emna');
        expect(bank.accounts[1].id).toBe(1);
    });
})
