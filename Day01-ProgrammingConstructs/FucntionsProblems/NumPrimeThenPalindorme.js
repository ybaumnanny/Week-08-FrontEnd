const readline = require('readline');

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

// Main function to check conditions
function checkPrimeAndPalindrome(num) {
    if (!isPrime(num)) {
        console.log(`${num} is not a prime number.`);
        return;
    }

    let palindromeNum = getPalindrome(num);
    console.log(`${num} is a prime number.`);
    console.log(`Its palindrome is ${palindromeNum}.`);

    if (isPrime(palindromeNum)) {
        console.log(`The palindrome ${palindromeNum} is also a prime number.`);
    } else {
        console.log(`The palindrome ${palindromeNum} is not a prime number.`);
    }
}

// Setup readline for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (userInput) => {
    const num = parseInt(userInput, 10);
    if (!isNaN(num)) {
        checkPrimeAndPalindrome(num);
    } else {
        console.log("Please enter a valid number.");
    }
    rl.close();
});
