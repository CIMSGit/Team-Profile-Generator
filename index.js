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
    let newEngineer= new Engineer("Zan",1222,"csaba@test.com","CIMSGit")


    team.push(newEngineer)

    let htmlDoc = render(team)
    await fs.writeFile(outputPath, htmlDoc)

}
