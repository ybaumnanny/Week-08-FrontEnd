// primeCheck.js

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Get user input from command line
const args = process.argv.slice(2);
const num = Number(args[0]);

if (!Number.isInteger(num) || num <= 0) {
    console.log("Please provide a positive integer.");
} else {
    if (isPrime(num)) {
        console.log(`${num} is a prime number.`);
    } else {
        console.log(`${num} is not a prime number.`);
    }
}
