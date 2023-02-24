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


    let { nameMan } = await inquirer
        .prompt([{
            type: 'input',
            name: 'nameMan',
            message: "What's the Manager's name?"
        },])
    let { idMan } = await inquirer
        .prompt([{
            type: 'input',
            name: 'idMan',
            message: "What's the manager's ID?",
        }])
    let { emailMan } = await inquirer
        .prompt([{
            type: 'input',
            name: 'emailMan',
            message: "What's the Manager' email?",
        }])
    let { officeNumberMan } = await inquirer
        .prompt([{
            type: 'input',
            name: 'officeNumberMan',
            message: "What's the Manager's office number?"
        },])
    team.push(new Manager(nameMan, idMan, emailMan, officeNumberMan))
    let { adding } = await inquirer
        .prompt([{
            type: "list",
            name: "adding",
            message: "Do you want to add someone else?",
            choices: ["Yes", "No"],
        },])
    if (adding === "Yes") {
        generateNewEmployee()
    }
    else {
        let htmlDoc = render(team)
        await fs.writeFile(outputPath, htmlDoc)
    }
}


async function generateNewEmployee() {

    let { role } = await inquirer
        .prompt([{
            type: 'list',
            name: 'role',
            message: "What role would you like to add?",
            choices: ["Intern", "Engineer"]
        },]);
    if (role === "Intern") {
        generateIntern()

    }
    if (role === "Engineer") {
        generateEngineer()
    }
}







async function generateIntern() {

    let { name } = await inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: "What's the Intern's name?"
        },])
    let { id } = await inquirer
        .prompt([{
            type: 'input',
            name: 'id',
            message: "What's the Intern's id?",
        }])
    let { email } = await inquirer
        .prompt([{
            type: 'input',
            name: 'email',
            message: "What's the Intern's email?",
        }])
    let { School } = await inquirer
        .prompt([{
            type: 'input',
            name: 'School',
            message: "What's the Intern's School?"
        },])

    team.push(new Intern(name, id, email, School));

    let { adding } = await inquirer
        .prompt([{
            type: "list",
            name: "adding",
            message: "Do you want to add someone else?",
            choices: ["Yes", "No"],
        },])
    if (adding === "Yes") {
        generateNewEmployee()
    }
    else {
        let htmlDoc = render(team)
        await fs.writeFile(outputPath, htmlDoc)
    }
}

async function generateEngineer() {


    let { name } = await inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: "What's the Engineer's name?"
        },])
    let { id } = await inquirer
        .prompt([{
            type: 'input',
            name: 'id',
            message: "What's the Engineer's id?",
        }])
    let { email } = await inquirer
        .prompt([{
            type: 'input',
            name: 'email',
            message: "What's the Engineer's email?",
        }])
    let { github } = await inquirer
        .prompt([{
            type: 'input',
            name: 'github',
            message: "What's the Engineer's github?"
        }])

    team.push(new Engineer(name, id, email, github))
    let { adding } = await inquirer
        .prompt([{
            type: "list",
            name: "adding",
            message: "Do you want to add someone else?",
            choices: ["Yes", "No"],
        },])
    if (adding === "Yes") {
        generateNewEmployee()
    }
    else {
        let htmlDoc = render(team)
        await fs.writeFile(outputPath, htmlDoc)
    }
}








