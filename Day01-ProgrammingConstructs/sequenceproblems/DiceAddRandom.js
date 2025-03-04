function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
// Rolling two dice
let dice1 = rollDice();
let dice2 = rollDice();

// Calculating the sum
let sum = dice1 + dice2;

// Printing the result
console.log(`Dice 1: ${dice1}, Dice 2: ${dice2}, Sum: ${sum}`);
