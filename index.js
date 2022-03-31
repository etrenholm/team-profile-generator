const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const fs = require('fs');
const generateFile = require('./src/page-template.js')

const employees = []

function App() {}

// prompt to enter the team manager's name, ID, email address, and office number
App.prototype.addManager = function() {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log("Please enter the team manager's name.")
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the team manager's employee ID number?",
                validate: idInput => {
                    if (idInput) {
                        return true
                    } else {
                        console.log("Please enter an ID number.")
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the team manager's email address?",
                validate: emailInput => {
                    if (emailInput) {
                        return true
                    } else {
                        console.log("Please enter an email address.")
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the team manager's office number?",
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true
                    } else {
                        console.log("Please enter an office number.")
                        return false
                    }
                }
            }
        ])
        .then(({ name, id, email, officeNumber  }) => {
            employees.push(new Manager(name, id, email, officeNumber))

            this.addEmployee();
        })

}


// Present a menu and prompt to add an engineer or intern
App.prototype.addEmployee = function() {

    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'confirm',
                message: "Do you want to add another employee?",
                default: false
            }
        ])
        .then(({ confirm }) => {
            if(confirm === true) {
                inquirer
                    .prompt({
                        type: 'list',
                        message: 'Would you like to add an engineer or an intern?',
                        name: 'action',
                        choices: 
                        [
                            'Engineer', 
                            'Intern'
                        ]
                    })
                    .then(({ action }) => {
                        if (action === 'Engineer') {
                            this.addEngineer()
                        } else {
                            this.addIntern()
                        }
                    })
            } else {
                console.log("Your HTML has been written!")
                return this.writePage(employees)
            }
        })
    }


// If engineer, prompt to enter name, ID, email and GitHub
App.prototype.addEngineer = function() {

    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the engineer's name.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee ID number?",
            validate: idInput => {
                if (idInput) {
                    return true
                } else {
                    console.log("Please enter an ID number.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log("Please enter an email address.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What is the engineer's GitHub username?",
            validate: githubInput => {
                if (githubInput) {
                    return true
                } else {
                    console.log("Please enter a GitHub username.")
                    return false
                }
            }
        }
    ])
    .then(({ name, id, email, gitHub }) => {
        employees.push(new Engineer(name, id, email, gitHub))

        // Then go back to menu
        this.addEmployee();
    })
}
    

// If Intern, prompt to enter name, ID, email and school
App.prototype.addIntern = function() {

    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the intern's name.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's employee ID number?",
            validate: idInput => {
                if (idInput) {
                    return true
                } else {
                    console.log("Please enter an ID number.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log("Please enter an email address.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the intern attend?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true
                } else {
                    console.log("Please enter a school.")
                    return false
                }
            }
        }
    ])
    .then(({ name, id, email, school }) => {
        employees.push(new Intern(name, id, email, school))

        // Then go back to menu
        this.addEmployee();
    })
}

App.prototype.writePage = function() {
    fs.writeFileSync('./dist/index.html', generateFile(employees))
}


new App().addManager()