class Department {
    // Public property to access outside from class
    name: string;
    // private accessifier to access employees within this class
    private employees: string[] = [];
    // ReadOnly Property
    readonly _id: string = 'ABCD';
    // this is called when object is created
    private lastReport: string;

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }

        throw new Error('No Report found');
    }

    set mostRecentReport(value: string){
        if(value){
            this.addReport(value);
        }
    }

    constructor(
        name: string, 
        public section: string, // we can directly initialize public property here to access within the class
        private readonly id: string, // readonly property can not be changed once defined
        public reports: string[]
        ) {
        this.name = name;
        this.lastReport = reports[0];
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

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }
}

const accounting = new Department('Rohit', 'IT', 'guid', ['']);
accounting.addEmployee('Robert');

console.log(accounting.mostRecentReport = '70', accounting, accounting.mostRecentReport);


