// var - global and function scope
var a = 10;

function add (ab: number, bc: number) {
    return ab + bc + a;
}

console.log(add(10, 20));

// if(a > 20) {
//     var isCorrect = true;
// }

// console.log(isCorrect); 
// isCorrect can be access outside the statement in javascript 
// to solve this problem let introduced

const userName = 'Rohit'
let age = 27;
age = 30;

//  Arrow Function 

const button = document.querySelector('button');

// function with no argument
const sum = () => { };
// function with 2 argument and no return
const sum1 = (n1: number, n2: number) => { };
// function with 2 argument with return statement
const sum2 = (n1: number, n2: number) => n1 + n2;
// function with 2 argument with longer way of return
const sum3 = (n1: number, n2: number) => { return n1 + n2 };
// function single argument without specifying braces and type
if(button){
    button.addEventListener('click', event => {
        console.log(event);
    })
}

// Default function parameter
// Default function parameter always start from the right
const add1 = (n1: number, n2: number = 10 ) => n1 + n2;

// Spread Operator
const hobbies = ['sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
const person = {
    name: 'Rohit'
}
const copiedPerson = {
    ...person
}


// Rest Parameters
const ages = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0)
}

const addAges = ages(20,40,50);


// Array and Object Destructing

// Array Destructing
const [ hobby1, hobby2] = hobbies;
const users = [{firstName: 'Rohit', lastName: 'kumar'}, {firstName: 'Gopi', lastName: 'nishad'}, {firstName: 'Nishad', lastName: 'gopi'}]
const [user1, ...remainingUsers] = users;

// Object Destructing
const {firstName, ...remainingProperties} = user1;