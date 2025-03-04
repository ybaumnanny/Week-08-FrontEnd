function validateEmail(email) {
    const regex = /^abc([_\+\-\.][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;
    return regex.test(email);
}
console.log(validateEmail("abc.xyz@bridgelabz.co.nm"));
console.log(validateEmail("abc.yaman@bridgelabz.co"));
