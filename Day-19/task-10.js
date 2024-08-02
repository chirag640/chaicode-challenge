function validateURL(url) {
    let regex10 = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*\/?$/;
    return regex10.test(url);
}

let url1 = "https://www.example.com";
let url2 = "htp:/example";
console.log(validateURL(url1)); // Output: true
console.log(validateURL(url2)); // Output: false
