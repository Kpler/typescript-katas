export class BankAccount {
    #balance = 0;

    constructor(readonly id: number, readonly name: string) {}

    public getBalance(): number {
        return this.#balance;
    }

    public deposit(depositAmount: number): void {
        if (depositAmount < 0) {
            throw new NicoCannotCount("He really cannot count!");
        }
        this.#balance += depositAmount;
    }

    public withdraw(withdrawnAmount: number): void {
        this.#balance -= withdrawnAmount;
    }
}

export class NicoCannotCount extends Error {

}