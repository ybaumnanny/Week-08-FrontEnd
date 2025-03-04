function validateEmail(email){
    const regex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz/
    return regex.test(email);
}
console.log(validateEmail("abc@bridgelabz"));
