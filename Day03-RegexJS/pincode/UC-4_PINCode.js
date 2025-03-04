function isValidPincode(pincode) {
    const regex = /^[1-9][0-9]{2}\s?[0-9]{3}$/; // Allows an optional space in the middle
    return regex.test(pincode);
}
console.log(isValidPincode("400 088"));  