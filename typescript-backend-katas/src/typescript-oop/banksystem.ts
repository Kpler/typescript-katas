import { NicoCannotCount, AlexCannotCount } from "./bankerrors";
export class BankAccount {
    #balance = 0;

    constructor(readonly id: number, readonly name: string) { }

    public getBalance(): number {
        return this.#balance;
    }

    public deposit(depositAmount: number): void {
        if (depositAmount < 0) {
            throw new NicoCannotCount(`He really cannot count! ${depositAmount} seriously?`);
        }
        this.#balance += depositAmount;
    }

    public withdraw(withdrawnAmount: number): void {
        if (withdrawnAmount < 0) {
            throw new AlexCannotCount(`He really cannot count! ${withdrawnAmount} seriously?`);
        }
        this.#balance -= withdrawnAmount;
    }
}
