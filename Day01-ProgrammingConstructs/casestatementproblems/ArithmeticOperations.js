const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Unit Conversion Options:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

rl.question("Enter your choice (1-4): ", (choice) => {
    rl.question("Enter the value to convert: ", (value) => {
        let num = parseFloat(value);
        let result;

        switch (parseInt(choice)) {
            case 1:
                result = num * 12; // 1 foot = 12 inches
                console.log(`${num} Feet = ${result} Inches`);
                break;
            case 2:
                result = num * 0.3048; // 1 foot = 0.3048 meters
                console.log(`${num} Feet = ${result.toFixed(4)} Meters`);
                break;
            case 3:
                result = num / 12; // 1 inch = 1/12 feet
                console.log(`${num} Inches = ${result.toFixed(4)} Feet`);
                break;
            case 4:
                result = num / 0.3048; // 1 meter = 1/0.3048 feet
                console.log(`${num} Meters = ${result.toFixed(4)} Feet`);
                break;
            default:
                console.log("Invalid choice! Please enter a number between 1 and 4.");
        }
        
        rl.close();
    });
});
