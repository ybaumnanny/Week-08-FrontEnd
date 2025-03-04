// Get the command-line argument
const n = parseInt(process.argv[2], 10);

// Validate input
if (isNaN(n) || n < 0) {
    console.log("Please provide a valid non-negative integer.");
    process.exit(1);
}

let power = 0;
let result = 1;

// Print powers of 2 till 2^n or 256 is reached
while (power <= n && result <= 256) {
    console.log(`2^${power} = ${result}`);
    result *= 2;
    power++;
}