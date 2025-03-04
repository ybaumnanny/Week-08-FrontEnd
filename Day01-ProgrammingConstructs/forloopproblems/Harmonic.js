function harmonicNumber(n) {
    if (n <= 0) {
        return "n must be a positive integer";
    }
    
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / i;
    }
    return sum;
}

// Get command-line argument
const args = process.argv.slice(2);
const n = parseInt(args[0]);

if (isNaN(n) || n <= 0) {
    console.log("Please provide a positive integer.");
} else {
    console.log(`The ${n}th harmonic number is:`, harmonicNumber(n));
}
