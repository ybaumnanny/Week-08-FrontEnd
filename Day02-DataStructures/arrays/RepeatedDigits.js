function findRepeatedDigitsInRange() {
    let repeatedNumbers = [];
    for (let i = 10; i <= 99; i++) {
        let strNum = i.toString();
        if (strNum[0] === strNum[1]) {
            repeatedNumbers.push(i);
        }
    }
    return repeatedNumbers;
}
console.log("Repeated digit numbers from 0-100:", findRepeatedDigitsInRange());
