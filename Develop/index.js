const inquirer = require("inquirer");
const generalMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

const questions = [
    { type: "input", name: "github", message: "GitHub username?" },
    { type: "input", name: "email", message: "Your email address?" },
    { type: "input", name: "url", message: "Project URL?" },
    { type: "input", name: "title", message: "Project title?" },
    { type: "input", name: "description", message: "Project description?" },
    { type: "input", name: "license", message: "Project license?", choices:["MIT","APACHE 2.0","None"] },
    { type: "input", name: "installation", message: "Project dependencies?", default: "npm install" },
    { type: "input", name: "test", message: "How to run tests?" },
    { type: "input", name: "usage", message: "How to use the repo?" },
    { type: "input", name: "contributing",message: "How to contribute?" }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

function init() {
    inquirer.prompt(questions).then( (inquirerResponses) => {
        writeToFile("README.md", generalMarkdown({...inquirerResponses}));
    })
   
}

init(); 
