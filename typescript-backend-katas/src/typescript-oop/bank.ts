import {BankAccount} from "./banksystem";

export class Bank {
    public accounts: Array<BankAccount> = [];
    
    createAccount(accountName: string): void {
        this.accounts.push(
            new BankAccount(0, accountName)
        );
    }   
}
