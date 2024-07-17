let num = 5;
let factorial = 1;
let l = num;

do {
    factorial *= l;
    l--;
} while (l > 0);

console.log(factorial);
