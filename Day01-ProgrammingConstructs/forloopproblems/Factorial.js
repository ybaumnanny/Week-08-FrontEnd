
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Get user input from command line
const args = process.argv.slice(2);
const num = Number(args[0]);

if (!Number.isInteger(num) || num < 0) {
    console.log("Please provide a non-negative integer.");
} else {
    console.log(`${num}! = ${factorial(num)}`);
}
