function isValidPincode(pincode) {
    const regex = /^[1-9][0-9]{5}$/; // Ensures a valid 6-digit PIN code
    return regex.test(pincode);
}
console.log(isValidPincode("400088B")); 