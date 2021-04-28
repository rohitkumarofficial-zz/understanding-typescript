// Core Types

// Number Type
function add (n1: number, n2: number) {
    return n1 + n2;
}

console.log(add(2, 2.5));

// String Type
function add1 (n1: number, n2: number, phrase: string) {
    const sum = n1 + n2;
    return phrase + sum;
}
const phrase = 'Result is : ';
const result = add1(2, 2.5, phrase);
console.log(result);

// boolean Type
function add2 (n1: number, n2: number, doSum: boolean) {
    if (doSum) {
        const sum = n1 + n2;
        return sum;
    }

    console.log(n1, n2);
}
console.log(add2(2, 2.5, true));

// object Type
const person = {
    name: 'Rohit',
    age: 27
}

console.log(person);

// array Type
const person1 = {
    name: 'Rohit',
    age: 27,
    hobbies: ['Sports', 'Listening']
}

for (let hobby of person1.hobbies) {
    console.log(hobby.toLocaleUpperCase())
}

// tuple Type
const person2: {
    name: string;
    age: number;
    hobbies: string[]; // n string of array
    roles: [number, string] // specify specific type to fixed length of array called tuple type
} = {
    name: 'Rohit',
    age: 27,
    hobbies: ['Sports', 'Listening'],
    roles: [1, 'ADMIN']
}

for (let role of person2.roles) {
    console.log(role)
}

// Enum Type
enum ROLE {
    ADMIN = 'ADMIN',
    USER = 'USER',
    SUPPORT_USER = 'SUPPORT_USER'
}

for (let role of person2.roles) {
    if (role === ROLE.ADMIN) {
        console.log(role);
    }
}

// any Type
const users : any[] = [{name: 'Rohit'}];
users.push({age: 20});
console.log(users)