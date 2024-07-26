class Account {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log('Insufficient balance');
        } else {
            this.#balance -= amount;
            console.log(`Withdrawn: ${amount}, New Balance: ${this.#balance}`);
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const myAccount = new Account(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(`Current Balance: ${myAccount.getBalance()}`);
