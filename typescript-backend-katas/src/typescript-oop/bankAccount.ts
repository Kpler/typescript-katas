export class BankAccount {
    #balance: number;
    constructor(public id: number, public name: string) {
        this.#balance = 0;
    }

    getBalance(): number {
        return this.#balance;
    }
}
