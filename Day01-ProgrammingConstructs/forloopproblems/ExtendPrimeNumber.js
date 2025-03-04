// primeRange.js

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

function primeNumbersInRange(start, end) {
    if (start > end) {
        console.log("Invalid range! Start should be less than or equal to End.");
        return;
    }

    console.log(`Prime numbers between ${start} and ${end}:`);
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            process.stdout.write(num + " "); // Print numbers on the same line
        }
    }
    console.log(); // New line for better formatting
}

// Get user input from command line
const args = process.argv.slice(2);
const start = Number(args[0]);
const end = Number(args[1]);

if (!Number.isInteger(start) || !Number.isInteger(end) || start <= 0 || end <= 0) {
    console.log("Please provide valid positive integers as range.");
} else {
    primeNumbersInRange(start, end);
}
