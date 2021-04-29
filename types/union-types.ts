// Union Type
function combine(input1: number | string, input2: number | string){
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        return input1 + input2;
    }

    return input1.toString() + input2.toString();
}

console.log(combine(1,2));
console.log(combine('Rohit', 'Kumar'))

// Literal Type
function combine1(input1: number | string, input2: number | string, resultConversion?: string){
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        return +input1 + +input2;
    }

    return input1.toString() + input2.toString();
}

console.log(combine1(1,20));
console.log(combine1('1','20', 'as-number'));

// Type Alias / Custom Types
type Combinable = number | string;