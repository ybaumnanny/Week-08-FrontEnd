function isLeapYear(year) {
    // Check if it's a 4-digit number
    if (year < 1000 || year > 9999) {
        return "Input must be a 4-digit year";
    }
    
    // Check leap year conditions
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return year + " is a Leap Year";
    } else {
        return year + " is not a Leap Year";
    }
}

// Example usage:
function checkLeapYear() {
    const yearInput = document.getElementById('yearInput').value;
    const year = parseInt(yearInput);
    
    if (isNaN(year)) {
        document.getElementById('result').textContent = "Please enter a valid number";
    } else {
        document.getElementById('result').textContent = isLeapYear(year);
    }
}

// Sample test cases
console.log(isLeapYear(2000)); 
console.log(isLeapYear(2020)); 
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2023)); 
console.log(isLeapYear(123));  