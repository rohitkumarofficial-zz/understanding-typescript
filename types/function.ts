function sum (n1: number, n2: number){
    return n1 + n2;
}

function printResult(num: number): void{
    //
}

function printResult1(num: number): undefined{
    return;
}

let combineValues : Function;

// Function Type
let combineValues1: (n1: number, n2: number) => number;
combineValues1 = sum;
console.log(combineValues1(1,2))

// callback functions can return something, 
// even if the argument on which they're passed does NOT expect a returned value.

function addAndHandle(n1: number, n2:number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}

console.log(addAndHandle(1,2, (result) => {}))