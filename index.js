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
    let {role,name,id,email,github,School,officeNumber,adding}= await inquirer
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
        type: "list",
        name:"adding",
        message:"Do you want to someone else?",
        choices:["Yes", "No"],
    }
    ]);
    if( role === "Manager" ){
        team.push( new Manager(name, id,email, officeNumber, ))

    }
    if(role === "Intern"){

        team.push(new Intern(name, id, email, School));

    }
    if (role === "Engineer")
    team.push(new Engineer(name, id,email, role, github));
    if (team.push === true ){

    }

    
    if (adding=== "Yes"){
        return startProgram()
    }
    else{
    let htmlDoc = render(team)
    await fs.writeFile(outputPath, htmlDoc)}
}
