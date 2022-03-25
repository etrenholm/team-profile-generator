const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

function App() {}

// prompt to enter the team manager's name, ID, email address, and office number
App.prototype.addManager = function() {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the team manager's employee ID number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the team manager's email address?"
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the team manager's office number?"
            }
        ])
        .then(({ name, id, email, officeNumber  }) => {
            this.manager = new Manager(name, id, email, officeNumber);

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
                //return this.writePage()
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
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?"
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What is the engineer's gitHub username?"
        }
    ])
    .then(({ name, id, email, gitHub }) => {
        this.engineer = new Engineer(name, id, email, gitHub);

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
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's employee ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the intern attend?"
        }
    ])
    .then(({ name, id, email, school }) => {
        this.intern = new Intern(name, id, email, school);

        // Then go back to menu
        this.addEmloyee();
    })
}


new App().addManager()