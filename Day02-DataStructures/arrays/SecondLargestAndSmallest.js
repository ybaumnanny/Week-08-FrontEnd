function secondLargestAndSmallest(arr) {
    let max = -Infinity, secondMax = -Infinity;
    let min = Infinity, secondMin = Infinity;

    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max) {
            secondMax = num;
        }

        if (num < min) {
            secondMin = min;
            min = num;
        } else if (num < secondMin && num !== min) {
            secondMin = num;
        }
    }

    return { secondLargest: secondMax, secondSmallest: secondMin };
}

// Generate 10 random 3-digit numbers
let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 900) + 100);
console.log("Generated Numbers:", numbers);

let result = secondLargestAndSmallest(numbers);
console.log("2nd Largest:", result.secondLargest, "2nd Smallest:", result.secondSmallest);
