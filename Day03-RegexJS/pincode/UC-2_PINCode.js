function isValidPincode(pincode) {
    const regex = /^[1-9][0-9]{5}$/; // Ensures only 6-digit PIN codes starting from 1-9
    return regex.test(pincode);
}
console. log(isValidPincode("A40088")); // false