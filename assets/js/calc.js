// This function calculates multiple number operations
function multipleOperator() {
    let manyNumberReceiver = prompt("Enter number separated by space: ");
    let operator = prompt("Choose operation\n1 for Addition\n2 for Multiplication")

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
            window.alert("Error! Wrong input")
            console.log("Error")
    }
}

// This function calculates dual number operations
function dualOperator() {

    // Input for two numbers and operation
    let number1 = parseFloat(prompt("--Dual Operator--\nEnter first number"));
    let operation = prompt("Choose an operation");
    let number2 = parseFloat(prompt("Enter second number"));

    if (!(isNaN(number1)) && !(isNaN(number2))) {

        switch (operation) {
            case "+":
                window.alert(`The sum value for ${number1} plus ${number2} is ` + add(number1, number2))
                // console.log(`The sum value for ${number1} plus ${number2} is ` + add(number1, number2))
                break
            case "-":
                window.alert(`The subtraction value for ${number1} minus ${number2} is ` + subtract(number1, number2))
                // console.log(`The subtraction value for ${number1} minus ${number2} is ` + subtract(number1, number2))
                break
            case "*":
                window.alert(`The multiplication value for ${number1} times ${number2} is ` + multiply(number1, number2))
                // console.log(`The multiplication value times ${number1} to ${number2} is ` + multiply(number1, number2))
                break
            case "/":
                window.alert(`The division value for ${number1} divide ${number2} is ` + division(number1, number2))
                // console.log(`The division value for ${number1} divide ${number2} is ` + division(number1, number2))
                break
            default:
                window.alert("Error! Wrong operator input\nPlease try again.")
                // console.log("Wrong operator input")
        }
    } else {
        window.alert("Error! Wrong number input.\nPlease try again.")
    }
}



// IIFE

(function () {
    let welcome = prompt("--Welcome to calculator--\nPress c key to continue\nPress q to quit").toLowerCase();
    do {

        if (welcome === "c") {
            let inputAccept = parseInt(prompt("--Mini Calculator--\nPress 1 for dual Operation\nPress 2 for multiple operation"))

            switch (inputAccept) {
                case 1:
                    dualOperator()
                    break
                case 2:
                    multipleOperator()
                    break
                default:
                    window.alert("Wrong Input!\nPlease try again")
                    break

            }
        }else if(welcome === "q"){
            break;
        }
        welcome = prompt("--Welcome to calculator--\nPress c to continue\nPress q to quit").toLowerCase();
    } while (welcome != "q")


})()

// Calculator functionalities
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
        window.alert("You can't make denominator Zero")
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