// CLASSES
// BluePrints of Objects
// method and properties same as object

// Access the method and properties of class with this keyword within the class

class Department1 {
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


class ITDepartment extends Department1 {
    constructor(department:string, id: string, section: string, public admins:string[]){
        super(department, id, section);
        this.admins = admins;
    }
}

const accounting1 = new ITDepartment('Accounting', 'IT', 'abc', ['Rohit']);
accounting1.addEmployee('Rohit');

console.log(accounting1)
