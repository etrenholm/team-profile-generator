class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }
}

// const manager = []

//employee.push(manager)

// const employee = [
//     new Manager
//     new Engineer
//     new Intern
// ]
// push into a loop
// take employee array and do loop to generate html card


module.exports = Employee;