import {Bank} from "./bank";

describe('Bank Test', () => {
    it('should initialize with bank accounts', () => {
        const bank = new Bank()

        expect(bank.accounts.length).toEqual(0)
    })

    it('should initialize bank accounts given a name', () => {
        const bank = new Bank('Manolis');

        expect(bank.accounts.length).toEqual(0)
    })
})
