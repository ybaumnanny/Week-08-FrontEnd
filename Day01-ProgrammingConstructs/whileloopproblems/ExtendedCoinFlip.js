function flipCoinGame() {
    let headsCount = 0;
    let tailsCount = 0;
    const WIN_COUNT = 11;

    while (headsCount < WIN_COUNT && tailsCount < WIN_COUNT) {
        let randomNumber = Math.random();
        if (randomNumber < 0.5) {
            headsCount++;
            console.log(`Flip: Heads | Score -> Heads: ${headsCount}, Tails: ${tailsCount}`);
        } else {
            tailsCount++;
            console.log(`Flip: Tails | Score -> Heads: ${headsCount}, Tails: ${tailsCount}`);
        }
    }
    // Announce the winner
    if (headsCount === WIN_COUNT) {
        console.log("\nHeads wins the game with 11 flips!");
    } else {
        console.log("\nTails wins the game with 11 flips!");
    }
}

flipCoinGame();
