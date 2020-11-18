
let numArray = new Array();

for(let num = 0; num < 10; num++){
    let numCurr = Math.floor(Math.random()*900) + 100
    numArray.push(numCurr)
}

console.log("Array is :  " + numArray)
numArray.sort();
console.log("Sorted Array is :  " + numArray.toString() + "\nMinimum number is :  " + numArray[0] + "\nMaximum number is :  " + numArray[numArray.length -1])