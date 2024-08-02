function validatePassword(password) {
    let regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex9.test(password);
}

let password1 = "Password123!";
let password2 = "password";
console.log(validatePassword(password1)); // Output: true
console.log(validatePassword(password2)); // Output: false
