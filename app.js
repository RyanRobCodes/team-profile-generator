const inquirer = require('inquirer');

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const index = require("./index.js");
const path = require("path");
const { fs } = require('fs');
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "index.html");

const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is your employee id number?'

        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',

        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?'
        }

    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.OfficeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Select your choice below',
            choices: ['add an engineer', 'add an intern', 'team building is complete']
        }
    ]).then(userChoice => {
        switch (userChoice.menu) {
            case "add an engineer":
                promptEngineer();
                break;
            case "add an intern":
                promptIntern();
                break;
            default:
                buildTeam();
        }
    });

};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is your employee id number?'

        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',

        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?'
        }

    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer (answers.name, answers.employeeId, answers.email, answers.Github);
        teamMembers.push(engineer);
        promptMenu();
    })
};


const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is your employee id number?'

        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',

        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your school name?'
        }

    ]).then(answers => {
        console.log(answers);
        const intern = new Intern (answers.name, answers.employeeId, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {


if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
}
fs.writeFileSync(outputPath, index(teamMembers), "utf8");

}
promptManager();