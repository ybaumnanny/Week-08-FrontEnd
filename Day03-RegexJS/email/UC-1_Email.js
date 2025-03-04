function validateEmail(email){
    const regex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]+)?$/;
    return regex.test(email);
}
console.log(validateEmail("abc@bridgelabz.co"));
