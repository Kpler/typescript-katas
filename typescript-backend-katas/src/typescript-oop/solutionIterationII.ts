class BankAccount {
    private static nextId = 1;
    public readonly id: number;
    public owner: string;
    private balance: number;

    constructor(owner: string) {
        this.id = BankAccount.nextId++;
        this.owner = owner;
        this.balance = 0;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient balance or invalid withdrawal amount.");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

// Bank.ts
class Bank {
    private accounts: BankAccount[] = [];

    createAccount(owner: string): BankAccount {
        const account = new BankAccount(owner);
        this.accounts.push(account);
        return account;
    }

    private getAccountById(id: number): BankAccount | undefined {
        return this.accounts.find(account => account.id === id);
    }

    private getAccountByName(name: string): BankAccount | undefined {
        return this.accounts.find(account => account.owner === name);
    }

    getAccount(accountId: number | string): BankAccount | undefined {
        if (typeof accountId === 'number') {
            return this.getAccountById(accountId);
        } else {
            return this.getAccountByName(accountId);
        }
    }

    transfer(fromAccountId: number | string, toAccountId: number | string, amount: number): void {
        const fromAccount = this.getAccount(fromAccountId);
        const toAccount = this.getAccount(toAccountId);

        if (fromAccount && toAccount && fromAccount.getBalance() >= amount && amount > 0) {
            fromAccount.withdraw(amount);
            toAccount.deposit(amount);
        } else {
            console.log("Transfer failed. Check account IDs and balance.");
        }
    }

    getTotalBalance(): number {
        return this.accounts.reduce((total, account) => total + account.getBalance(), 0);
    }
}