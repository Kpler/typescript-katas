# Goal
Create a simple bank account management system that allows you to manage bank accounts and perform basic operations such as deposits, withdrawals, and transfers.

### Iteration I:
You and the finest bunch of your co-workers got asked to write a small banking app.
Your friend gave you the following user story.

- Write a BankAccount class
- public information: id, name set by constructor
- private information: balance (initial balance 0)
- public interaction getBalance, deposit, withdraw
  - getBalance (): number
  - deposit(amount: number): void
  - withdraw(amount: number): void

Later on, we plan add complex logic to retrieve the user 
balance. For this reason, instead of it being a public field, 
we want it to be a private field and add a simple 
`getBalance()` method that, in a first step, will 
just return the value of the private field.

- for the first iteration we want basic error handling so
  negative deposits and withdraws get ignored. 
  - (balance 100 -> deposit -100 -> balance 100), (balance 100 -> deposit 100 -> balance 200)
  - (balance 100 -> withdraw -100 -> balance 100), (balance 100 -> withdraw 100 -> balance 0)

-------------
### Iteration II:
- Create a Bank class which handles multiple bank accounts
- the Bank lets you:
  - have a list of BankAccounts
  - create an BankAccount given a name (Id should be set automatically [auto incremental])
  - withdraw and deposit money, given an valid accountId
    - invalid account -> ignore and do nothing
  - transfer money from one account to another given two accountIds and an amount
    - if both given accountIds are valid and the giver account balance is high enough
    - otherwise do nothing

For an international comparison between banks we also need a function to sum all our accounts together.
    - build a function which returns the total balance of all BankAccounts

-------------
### Iteration III:
To make more clients the Bank decided to grant you a little boost.
- The initial balance of an BankAccount will be set by the Bank not the BankAccount itself.
- The new initial balance is 100

-------------
### Iteration IV:
Due to some minor money laundering charge (the banks ceo (aka your "friend") got 15 years). The Bank is required to associate a Person to each bank account.

So instead of a name a BankAccount now takes a owner: (type Person) instead of a name
- Create a class Person with public attributes
  - first and last name (set via constructor)
  - personalIdentityNumber: string (e.g. "ABC123")

- Switch the name to owner: (type Person) on the Bank and the BankAccount

-------------

### Iteration V:
In order to make younger people chose our Bank. The marketing department started using TikTok to upload "cool" dancing videos reach a younger audience. Also they are offering Students an higher initial balances.

- Create a class Student which extends the Person and additionally takes a the school name of a student.
- If the Person who creates an BankAccount at their local Bank, is a Student they should get a starting balance of 1000.

Since each account is linked to a Person.
Also allow the transfer function to accept the personalIdentityNumber of a person.
