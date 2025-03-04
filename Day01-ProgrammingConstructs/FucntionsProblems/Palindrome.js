function isPalindrome(num) {
    let str = num.toString();
    return str === str.split('').reverse().join('');
}
function areBothPalindromes(num1, num2) {
    return isPalindrome(num1) && isPalindrome(num2);
}
console.log(areBothPalindromes(121, 131)); // true
console.log(areBothPalindromes(121, 123)); // false
