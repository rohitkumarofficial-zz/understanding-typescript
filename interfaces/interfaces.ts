/**
 * interface is blueprint of object
 * interface can be converted to class
 * we can add readonly access specifier in interface
 * Interface can be inherited using extends keyword
 * Interface as function type
 * Optional properties and parameter can be added to interfaces
 */

type AddFn = (a: number, b: number) => number;

const add: AddFn = (n1: number, n2: number) => { return n1 + n2 }

interface AddFn1 {
    (a: number, b: number): number
}

let add1: AddFn1 = (n1: number, n2: number) => { return n1 + n2 }

interface Named {
    readonly name?: string;
}
interface IPerson extends Named {
    age?: number;
    greet(phrase: string): void;
}

let user1: IPerson;

user1 = {
    name: 'Rohit',
    age: 27,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}

user1.greet('how are you');

class Person implements IPerson {
    name?: string;
    age?: number;

    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name);
    }

    constructor(name?: string, age?: number) {
        this.name = name;
        this.age = age;
    }

}

console.log(new Person());
console.log(new Person('Rohit Kumar'));
console.log(new Person().greet('hi'));

