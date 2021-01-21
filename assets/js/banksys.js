let bank = {
    users: [],
    action: {
        deposit: "",
        withdraw: "",
        balance: "",
        transfer: ""
    }
}

let fun = (function () {
    let user = prompt("Enter user name");
    let greetPrompt = prompt("Welcome to ABC Bank " + user + "\nThanks for choosing us\nPress enter to continue\nPress q to quit").toLowerCase();
    do {
        if ((bank.users).includes(user)) {
            let choice = prompt("Welcome back " + user + "\nChoose what to do:\n1 Deposit\n2 Withdraw\n3 Balance\n4 Transfer")

            switch (choice) {
                case "1":
                    deposit(user)
                    break
                case "2":
                    withdraw(user)
                    break
                case "3":
                    balance(user)
                    break
                case "4":
                    transfer(user)
                    break
            }
        } else {
            bank.users.push(user)
            let choice = prompt("Choose what to do:\n1 Deposit\n2 Withdraw\n3 Balance\n4 Transfer")

            switch (choice) {
                case "1":
                    deposit(user)
                    break
                case "2":
                    withdraw(user)
                    break
                case "3":
                    balance(user)
                    break
                case "4":
                    transfer(user)
            }
        }
        greetPrompt = prompt("Welcome to ABC Bank " + user + "\nThanks for choosing us\nPress enter to continue\nPress q to quit").toLowerCase();;
    } while (greetPrompt != "q")
})();


function deposit(user) {
    if (bank.users.includes(user)) {
        let amount = prompt("How much you want to deposit?");
        bank.action.deposit += amount;
        bank.action.balance += bank.action.deposit;
        alert("You deposit amount is " + bank.action.deposit + "br" + "\nPress c to continue");
    }
}

function withdraw(user) {
    let amount = prompt("How much do you want to withdraw?")
    if (bank.users.includes(user)) {
        if (bank.action.deposit >= parseFloat(amount)) {
            alert("You have withdraw " + amount + "br");
            bank.action.deposit -= amount;
            bank.action.deposit = parseFloat(bank.action.deposit);
            bank.action.balance = bank.action.deposit;
            alert("Your current balance is " + bank.action.balance + "br")
        } else {
            alert("You don't have that much money");
        }
    }
}

function balance(user) {
    if (bank.users.includes(user)) {
        alert("You have " + bank.action.balance+"br")
    }
}

function transfer(user) {
    if (bank.users.includes(user)) {

        let receiverUserName = prompt("Enter receivers user name: ");
        let amount = prompt("How much you want to send?");
        if (bank.action.balance >= amount) {
            bank.action.balance -= amount;
            alert(`You have sent ${amount}br to ${receiverUserName} \nYour current balance is  ${bank.action.balance}br`);
        } else {
            alert("You don't have that much money to send");
        }
    }
}