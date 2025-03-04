function gamble() {
    let money = 100;
    const goal = 200;
    let bets = 0;
    let wins = 0;

    while (money > 0 && money < goal) {
        bets++;
        let betOutcome = Math.random(); // Generates a number between 0 and 1

        if (betOutcome < 0.5) {
            money--; // Lost the bet
            console.log(`Lost the bet! Money left: Rs. ${money}`);
        } else {
            money++; // Won the bet
            wins++;
            console.log(`Won the bet! Money now: Rs. ${money}`);
        }
    }
    if (money === 0) {
        console.log("\nThe gambler went broke!");
    } else {
        console.log("\nThe gambler reached the goal of Rs. 200!");
    }

    console.log(`Total bets made: ${bets}`);
    console.log(`Total wins: ${wins}`);
}

gamble();
