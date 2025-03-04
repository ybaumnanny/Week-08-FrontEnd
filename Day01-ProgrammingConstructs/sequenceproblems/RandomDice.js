function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
const diceNumber = rollDice();
console.log("🎲 Dice Roll:", diceNumber);
