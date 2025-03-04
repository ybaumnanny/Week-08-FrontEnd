function validateEmail(email) {
    const regex = /^abc([_\+\-\.][a-zA-Z0-9]+)?@bridgelabz\.co(\.in)?$/;
    return regex.test(email);
}
console.log(validateEmail("abc#xyz@bridgelabz.co.in"));// gives false output
console.log(validateEmail("abc.hello@bridgelabz.co.in"));// give true output