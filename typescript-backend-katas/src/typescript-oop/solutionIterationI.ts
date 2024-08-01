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