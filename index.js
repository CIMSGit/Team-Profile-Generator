const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require('fs/promises');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = [];
startProgram();


async function startProgram() {
    let {role,name,id,email,github,School,officeNumber}= await inquirer
    .prompt([    {
        type: 'list',
        name: 'role',
        message: "What's your role?",
        choices:["Manager","Intern","Engineer"]
    },
    {
        type: 'input',
        name: 'name',
        message: "What's your name?",
    }, {
        type: 'input',
        name: 'id',
        message: "Your ID?",
    }, {
        type: 'input',
        name: 'email',
        message: "Email address?",
    },
    {
        type: 'input',
        name: 'github',
        message: "Github?",
    },
    {
        type: 'input',
        name: 'School',
        message: "School?",
    },
    
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is your GitHub username?",
    },
    ])
    let newEngineer = new Engineer(name, id,email, role, github);
    let newIntern = new Intern(name, id, email, School);
    let newManager = new Manager(name, id,email, officeNumber, )

    team.push(newEngineer, newIntern, newManager)

    let htmlDoc = render(team)
    await fs.writeFile(outputPath, htmlDoc)

}
