# Goal
Create a simple bank account management system that allows you to manage bank accounts and perform basic operations such as deposits, withdrawals, and transfers.

### Iteration I:
You and the finest of your co-workers got asked to write a small banking app.
Your friend gave you the following user story.

Later on, we plan add complex logic to retrieve the user 
balance. For this reason, instead of it being a public field, 
we want it to be a private field and add a simple 
`getBalance()` method that, in a first step, will 
just return the value of the private field
The initial balance of a new account should be 0


- Create Bank account (without connection to any bank)
- The only visible information of an bank account are:
    - id
    - name
- The account balance is not directly accessable by outsiders.
- basic functionality withdraws, deposits


-------------
 (remove auto incr from I iteration)Also the id is not needed to create a new bank account and will be set automatically once a new bank account is created.

### Iteration II:
- Create a Bank which handles multiple bank accounts.
- For a given id or name, a bank will let you deposit, withdraw and transfer money.


### Iteration III:
Due to some minor money laundering charge (the banks ceo (aka your "friend") got 15 years). The Bank is required to associate a Person to each bank account.

- A person is defined by its:
    - first and last name
    - birthday
    - Rentenidentifikationsnummer (Pension identification number) (use Math random or uuid) (your friend made a couple friends in switzerland)
- The last two get assigned on birth.

- There are also Students which get benefits like 100 inital amount on there accounts
    - They have an school which they are assigned to.

- Change the code to accept Person as an owner of an bank account.




``` typescript
// Person.ts
class Person {
    private rentenidentifikationsnummer: number;
    protected birthDay: Date;
    constructor(public firstName: string, public lastName: string) {
        this.rentenidentifikationsnummer = Math.ceil(Math.random() * 1000000000000);
        this.birthDay = new Date();
    }

    getAge(): number {
        const now = new Date();
        return now.getFullYear() - this.birthDay.getFullYear();
    }

    getRIN(): number {
        return this.rentenidentifikationsnummer;
    }
}

// Student.ts
class Student extends Person {
    constructor(firstName: string, lastName: string, public school: string) {
        super(firstName, lastName);
    }
}

// BankAccount.ts
class BankAccount {
    private static nextId = 1;
    public readonly id: number;
    public owner: Person;
    private balance: number;

    constructor(owner: Person) {
        this.id = BankAccount.nextId++;
        this.owner = owner;
        this.balance = owner instanceof Student ? 100 : 0; // $100 signing bonus for students
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

    createAccount(owner: Person): BankAccount {
        const account = new BankAccount(owner);
        this.accounts.push(account);
        return account;
    }

    private getAccountById(id: number): BankAccount | undefined {
        return this.accounts.find(account => account.id === id);
    }

    private getAccountByName(firstAndLastName: string): BankAccount | undefined {
        return this.accounts.find(account => account.owner.firstName + ' ' + account.owner.LastName === firstAndLastName);
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

// Test the bank system
const bank = new Bank();

const alice = new Person('Alice', 'anchovy');
const bob = new Student('Bob', 'Barramundi');

const aliceAccount = bank.createAccount(alice);
const bobAccount = bank.createAccount(bob);

aliceAccount.deposit(1000);
bobAccount.deposit(500);

console.log('Alice\'s Balance:', aliceAccount.getBalance());
console.log('Bob\'s Balance (including signing bonus):', bobAccount.getBalance());

bank.transfer(aliceAccount.id, bobAccount.id, 200);

console.log('Alice\'s Balance after transfer:', aliceAccount.getBalance());
console.log('Bob\'s Balance after transfer:', bobAccount.getBalance());

console.log('Total Bank Balance:', bank.getTotalBalance());

```
