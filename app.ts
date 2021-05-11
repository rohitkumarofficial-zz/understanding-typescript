// CLASSES
// BluePrints of Objects
// method and properties same as object

// Access the method and properties of class with this keyword within the class

class Department {
    // Public property to access outside from class
    name: string;
    // private accessifier to access employees within this class
    private employees: string[] = [];
    // ReadOnly Property
    readonly _id: string = 'ABCD';
    // this is called when object is created
    constructor(
        n: string, 
        public section: string, // we can directly initialize public property here to access within the class
        private readonly id: string // readonly property can not be changed once defined
        ) {
        this.name = n;
    }

    describe () {
        console.log('Department: ' + this.name + this.section);
        // this._id= 'ABCDE'; // Error - Cannot assign to '_id' because it is a read-only property
    }

    describe1 (this: Department) {
        console.log('Department: ' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }
}

const accounting = new Department('Accounting', 'A', 'guid');
accounting.addEmployee('Rohit');

