const args = process.argv.slice(2);
const month = parseInt(args[0]); // First argument: Month
const day = parseInt(args[1]);   // Second argument: Day
if (
    (month === 3 && day >= 20) || // March 20 or later
    (month > 3 && month < 6) ||   // April and May (fully included)
    (month === 6 && day <= 20)    // June 20 or earlier
) {
    console.log(true);
} else {
    console.log(false);
}
