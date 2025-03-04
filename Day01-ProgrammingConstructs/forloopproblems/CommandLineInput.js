// Get the command-line argument
const args = process.argv.slice(2);

// Check if an argument is provided and is a valid number
if (args.length !== 1 || isNaN(args[0])) {
    console.log("Usage: node script.js <n>");
    process.exit(1);
}

const n = parseInt(args[0]);

// Ensure n is non-negative
if (n < 0) {
    console.log("Please enter a non-negative integer.");
    process.exit(1);
}

console.log("Power of 2 Table:");
console.log("Exponent | Value");
console.log("----------------");

for (let i = 0; i <= n; i++) {
    console.log(`${i}        | ${Math.pow(2, i)}`);
}
