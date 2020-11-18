function Result() {
    return Math.floor(Math.random() * 100) % 6 + 1; 
}
let count = new Map();
let min_Key;
let max_Key;
let max_Value = -1;
let min_Value = 11;

while(true) {
    var number = Result(); 
    if(!count.has(number))
        count.set(number, 1);
    else {
        let count = count.get(number);
        count.set(number, ++count);
    }
    if(count.get(number) == 10) 
        break;
}

console.log(count);

for( let [key, value] of count) {
    if(value < min_Value) {
        min_Key = key;
        min_Value = value;
    }
    if(value > max_Value) {
        max_Key = key;
        max_Value = value;
    }
}

console.log("Minimum key count: " + min_Key + ", count: " + min_Value);
console.log("Maximum key count: " + max_Key + ", count: " + max_Value);
