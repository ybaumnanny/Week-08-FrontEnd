const numbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 90) + 10);
// Calculate the sum
const sum = numbers.reduce((acc, num) => acc + num, 0);
// Calculate the average
const average = sum / numbers.length;
console.log(`Random Numbers: ${numbers.join(', ')}`);
console.log(`Sum: ${sum}`);
console.log(`Average: ${average.toFixed(2)}`);
