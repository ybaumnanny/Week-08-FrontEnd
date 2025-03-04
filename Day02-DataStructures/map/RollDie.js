function rollDieSimulation() {
    let dieRolls = new Map(); // Stores die values and their counts

    // Initialize Map with values 1 to 6, all set to 0
    for (let i = 1; i <= 6; i++) {
        dieRolls.set(i, 0);
    }
    let maxRolls = 10; // Stop when any number reaches this count
    let maxNum, minNum;

    while (true) {
        let roll = Math.floor(Math.random() * 6) + 1; // Roll a die (1-6)
        dieRolls.set(roll, dieRolls.get(roll) + 1); // Increment count

        // Check if any number has reached maxRolls
        if (dieRolls.get(roll) === maxRolls) {
            break;
        }
    }

    // Find max and min occurrences
    maxNum = [...dieRolls.entries()].reduce((a, b) => (a[1] > b[1] ? a : b));
    minNum = [...dieRolls.entries()].reduce((a, b) => (a[1] < b[1] ? a : b));

    console.log("Die Roll Counts:", Object.fromEntries(dieRolls));
    console.log("Number with Maximum Rolls:", maxNum[0], "rolled", maxNum[1], "times");
    console.log("Number with Minimum Rolls:", minNum[0], "rolled", minNum[1], "times");
}

rollDieSimulation();
