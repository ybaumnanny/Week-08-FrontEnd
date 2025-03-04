function generateBirthMonths() {
    let birthMonths = new Map();
    // Initialize Map with months (1 to 12) as keys, all set to empty arrays
    for (let i = 1; i <= 12; i++) {
        birthMonths.set(i, []);
    }

    // Generate 50 individuals with random birth months
    for (let i = 1; i <= 50; i++) {
        let month = Math.floor(Math.random() * 12) + 1; // Random month (1-12)
        birthMonths.get(month).push(`Person ${i}`); // Store person in respective month
    }
    console.log("Birth Month Distribution:");
    for (let [month, persons] of birthMonths.entries()) {
        if (persons.length > 0) {
            console.log(`Month ${month}:`, persons);
        }
    }
}

generateBirthMonths();
