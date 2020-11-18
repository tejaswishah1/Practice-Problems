

const prompt = require('prompt-sync')();

let num = prompt("Enter a Number:  ")
num = parseInt(num)
let factors = new Array()
for(let factor = 2; factor <= num; factor++){
    while(num % factor == 0){
        factors.push(factor);
        num = num / factor;
    }
}

console.log("Prime Factorization of " + num + " is:  " + factors.toString())