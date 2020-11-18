let numArray = new Array();

for(let num = 0; num < 10; num++){
    let numCurr = Math.floor(Math.random()*900) + 100
    numArray.push(numCurr)
}

let numMin = numArray[0]
let numMax = numArray[0]

for(let num = 1; num < numArray.length; num++){
    if(numArray[num] < numMin)
        numMin = numArray[num]
    if(numArray[num] > numMax)
        numMax = numArray[num]
}

console.log("Array is :  " + numArray.toString())
console.log("Minimum number is : " + numMin + "\nMaximum number is : " + numMax)