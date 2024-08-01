export class BankAccount {
    private balance: number;
    constructor(public id: number, public name: string) {
        this.balance = 0;
    }
}
