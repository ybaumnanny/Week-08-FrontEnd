const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter three numbers (a, b, c) separated by space: ", function(input) {
    let numbers = input.split(" ").map(Number);
    let [a, b, c] = numbers;

    if (numbers.length !== 3 || numbers.some(isNaN)) {
        console.log("Invalid input! Please enter three numbers.");
        rl.close();
        return;
    }
    let result1 = a + b * c;
    let result2 = a % b + c; 
    let result3 = c + a / b;  
    let result4 = a * b + c;  

    console.log(`Results of operations:
    1. a + b * c  = ${result1}
    2. a % b + c  = ${result2}
    3. c + a / b  = ${result3}
    4. a * b + c  = ${result4}`);

    let results = [result1, result2, result3, result4];
    let max = Math.max(...results);
    let min = Math.min(...results);

    console.log(`Maximum value: ${max}`);
    console.log(`Minimum value: ${min}`);

    rl.close();
});
