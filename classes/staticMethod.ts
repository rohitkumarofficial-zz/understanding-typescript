class Department2 {
    constructor(){}
    static AddEmployee(emp: string){
        return {emp}
    }
}

console.log(Department2.AddEmployee('Rohit'))