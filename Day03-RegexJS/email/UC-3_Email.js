function validateEmail(email) {
    const regex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co/;
    return regex.test(email);
}
console.log(validateEmail("abc@bridgelabz.co"));         // ✅ True
