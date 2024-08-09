import {BankAccount} from "./banksystem";

export class Bank {
    public accounts: Array<BankAccount> = [];

    public createAccount(accountName: string): void {
        const id = this.accounts.length;
        this.accounts.push(
            new BankAccount({id, name: accountName})
        );
    }
}
