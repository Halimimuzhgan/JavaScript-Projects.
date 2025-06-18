function calculateAll() {
    // Generate two random numbers between 1 and 100
    let num1 = Math.floor(Math.random() * 100) + 1;
    let num2 = Math.floor(Math.random() * 100) + 1;

    // Binary operations
    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = (num2 !== 0) ? (num1 / num2).toFixed(2) : "Undefined (division by zero)";
    let modulus = (num2 !== 0) ? num1 % num2 : "Undefined";

    // Unary and other operators
    let unaryPlus = +num2;
    let negation = -num2;

    let increment = num1;
    increment++;

    let decrement = num2;
    decrement--;

    let randomExtra = Math.floor(Math.random() * 101);

    // Display results
    document.getElementById("Addition").textContent = `Addition: ${num1} + ${num2} = ${addition}`;
    document.getElementById("Subtraction").textContent = `Subtraction: ${num1} - ${num2} = ${subtraction}`;
    document.getElementById("Multiplication").textContent = `Multiplication: ${num1} * ${num2} = ${multiplication}`;
    document.getElementById("Division").textContent = `Division: ${num1} / ${num2} = ${division}`;
    document.getElementById("Modulus").textContent = `Modulus: ${num1} % ${num2} = ${modulus}`;
    document.getElementById("Unary").textContent = `Unary Plus: +${num2} = ${unaryPlus}`;
    document.getElementById("Negation").textContent = `Negation: -${num2} = ${negation}`;
    document.getElementById("Increment").textContent = `Increment: ${num1}++ = ${increment}`;
    document.getElementById("Decrement").textContent = `Decrement: ${num2}-- = ${decrement}`;
    document.getElementById("Random").textContent = `Extra Random Number (0–100): ${randomExtra}`;
}

