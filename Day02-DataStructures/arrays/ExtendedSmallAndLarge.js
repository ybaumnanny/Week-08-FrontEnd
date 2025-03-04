function secondLargestAndSmallestSorted(arr) {
    arr.sort((a, b) => a - b);
    return { secondLargest: arr[arr.length - 2], secondSmallest: arr[1] };
}
// Generate 10 random 3-digit numbers
let numbersSorted = Array.from({ length: 10 }, () => Math.floor(Math.random() * 900) + 100);
console.log("Generated Numbers:", numbersSorted);

let sortedResult = secondLargestAndSmallestSorted([...numbersSorted]);
console.log("Sorted Numbers:", numbersSorted);
console.log("2nd Largest:", sortedResult.secondLargest, "2nd Smallest:", sortedResult.secondSmallest);
