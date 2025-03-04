const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number (1-7) to get the corresponding weekday: ", (input) => {
    let dayNumber = parseInt(input);
    let day;

    switch (dayNumber) {
        case 1: day = "Sunday"; break;
        case 2: day = "Monday"; break;
        case 3: day = "Tuesday"; break;
        case 4: day = "Wednesday"; break;
        case 5: day = "Thursday"; break;
        case 6: day = "Friday"; break;
        case 7: day = "Saturday"; break;
        default: day = "Invalid input! Enter a number between 1 and 7.";
    }

    console.log("Day:", day);
    rl.close();
});
