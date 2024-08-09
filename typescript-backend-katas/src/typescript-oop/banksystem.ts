export class BankAccount {
    #balance = 0;   

    constructor(readonly id: number, readonly name: string) {}

    public getBalance(): number {
        return this.#balance;
    }
    
    public deposit(depositAmount: number): void {
        this.#balance = depositAmount;
    }
}
