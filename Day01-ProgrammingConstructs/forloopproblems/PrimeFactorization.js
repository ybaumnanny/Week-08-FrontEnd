function primeFactorization(n) {
    if (n <= 1) {
        console.log("Please provide an integer greater than 1.");
        return;
    }
    console.log(`Prime factors of ${n}:`);

    // Divide by 2 while n is even
    while (n % 2 === 0) {
        process.stdout.write("2 ");
        n = n / 2;
    }
    // Check for odd factors from 3 to sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            process.stdout.write(i + " ");
            n = n / i;
        }
    }
    // If n is a prime number greater than 2, print it
    if (n > 2) {
        process.stdout.write(n + " ");
    }
    console.log(); // New line for formatting
}
// Get user input from command line
const args = process.argv.slice(2);
const num = Number(args[0]);

if (!Number.isInteger(num) || num <= 1) {
    console.log("Please provide an integer greater than 1.");
} else {
    primeFactorization(num);
}
