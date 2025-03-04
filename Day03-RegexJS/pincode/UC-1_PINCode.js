function isValidPincode(pincode) {
    const regex = /^[1-9][0-9]{5}$/;
    return regex.test(pincode);
}
console. log(isValidPincode("400088")); 