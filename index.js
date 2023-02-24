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
    let { name } = await inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: "What's your name?"
    },])
    let { id } = await inquirer
    .prompt([{
        type: 'input',
        name: 'id',
        message: "What's your id?",
    }])
    let { email } = await inquirer
    .prompt([{
        type: 'input',
        name: 'email',
        message: "What's your email?",
    }])
    let { role } = await inquirer
        .prompt([{
            type: 'list',
            name: 'role',
            message: "What's your role?",
            choices: ["Manager", "Intern", "Engineer"]
        },])
  
  
   

    if (role === "Manager") {
        let { officeNumber } = await inquirer
        .prompt([{
            type: 'input',
            name: 'officeNumber',
            message: "What's your office number?"
        },])

        team.push(new Manager(name, id, email, officeNumber,))

    }
    if (role === "Intern") {
        let { School } = await inquirer
        .prompt([{
            type: 'input',
            name: 'School',
            message: "What's your School?"
        },])

        team.push(new Intern(name, id, email, School));
        

    }
    if (role === "Engineer"){
        let { github } = await inquirer
        .prompt([{
            type: 'input',
            name: 'github',
            message: "What's your github?"
        }])
        team.push(new Engineer(name, id, email, role, github));}
    if (team.push === true) {

    }
   
    let { adding } = await inquirer
        .prompt([{
            type: "list",
            name: "adding",
            message: "Do you want to someone else?",
            choices: ["Yes", "No"],
        },])

    if (adding === "Yes") {
        return startProgram()
    }
    else {
        let htmlDoc = render(team)
        await fs.writeFile(outputPath, htmlDoc)
    }
}
