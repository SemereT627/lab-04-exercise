// Input for many numbers
function multipleOperator() {
    let manyNumberReceiver = prompt("Enter number separated by space: ");
    let operator = prompt("choose operation\n1 for Addition\n2 for Multiplication")

    manyNumberReceiver = manyNumberReceiver.split(" ").map(function (item) {
        return parseFloat(item, 10)

    })
    switch (operator) {
        case "1":
            window.alert("The sum result is " + add(manyNumberReceiver))
            console.log("The sum result is " + add(manyNumberReceiver))
            break
        case "2":
            window.alert("The multiplication result is " + multiply(manyNumberReceiver))
            console.log("The multiplication result is " + multiply(manyNumberReceiver))
            break
        default:
            console.log("Error")
    }
}

function dualOperator() {

    // Input for two numbers
    let number1 = parseFloat(prompt("--Dual Operator--\nEnter first number"));
    let number2 = parseFloat(prompt("Enter second number"));
    let operation = prompt("Choose an operation");

    switch (operation) {
        case "+":
            window.alert(`The sum value for ${number1} plus ${number2} is ` + add(number1, number2))
            console.log(`The sum value for ${number1} plus ${number2} is ` + add(number1, number2))
            break
        case "-":
            window.alert(`The sum value for ${number1} minus ${number2} is ` + subtract(number1, number2))
            console.log(`The subtraction value for ${number1} minus ${number2} is ` + subtract(number1, number2))
            break
        case "*":
            window.alert(`The sum value for ${number1} times ${number2} is ` + multiply(number1, number2))
            console.log(`The multiplication value times ${number1} to ${number2} is ` + multiply(number1, number2))
            break
        case "/":
            window.alert(`The sum value for ${number1} divide ${number2} is ` + division(number1, number2))
            console.log(`The division value for ${number1} divide ${number2} is ` + division(number1, number2))
            break
        default:
            console.log("Failed")
    }
}



// IIFE

(function () {
    let welcome = prompt("--Welcome to calculator--\nPress c key to continue\nPress q to quit").toLowerCase(); 
    do {    
        let inputAccept = parseInt(prompt("Mini Calculator \nPress 1 for dual Operation\nPress 2 for multiple operation"))

        switch (inputAccept) {
            case 1:
                dualOperator()
                break
            case 2:
                multipleOperator()
                break

        }
        welcome = prompt("--Welcome to calculator--\nPress c to continue\nPress q to quit").toLowerCase();
    }while(welcome != "q")


})()

// Functions

function add(a, b = null) {
    let result = 0;
    if (b == null) {
        for (var i = 0; i < a.length; i++) {
            result += a[i]
        }
        return result;
    } else {
        return a + b
    }
}

function multiply(a, b = null) {
    let result = 1;
    if (b == null) {
        for (var i = 0; i < a.length; i++) {
            result *= a[i]
        }
        return result;
    }
    return a * b
}

function subtract(a, b) {
    return a - b
}

function division(a, b) {
    if (b === 0) {
        window.alert("You cannot make the denominator Zero")
        return
    }
    return a / b
}

function max(a, b) {
    return a > b ? a : b
}

function min(a, b) {
    a < b ? a : b
}

function average(a, b) {
    return (a + b) / 2
}