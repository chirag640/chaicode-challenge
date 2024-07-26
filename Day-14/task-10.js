const myAccount = new Account(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.withdraw(2000); // This should log 'Insufficient balance'
console.log(`Current Balance: ${myAccount.getBalance()}`);
