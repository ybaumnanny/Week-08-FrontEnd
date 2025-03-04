function flipCoin() {
    let randomNumber = Math.random(); 

    if (randomNumber < 0.5) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}

flipCoin();
