// need the const fs variable here
const fs = require("fs");

// need inquirer variable here
const inquirer = require("inquirer");

// need a markdown js file here
const generateMarkdown = require("./utils/generateMarkdown");

const renderLicenseBadge = require("./utils/generateMarkdown");

const renderLicenseLink = require("./utils/generateMarkdown");

const renderLicenseSection = require("./utils/generateMarkdown");


function validateInput(value) {
    if (value != "") {
        return true;
    } else {
        return "Please answer the question with some kind on input.";
    }
}

// TODO: Create an array of questions for user input
const questions = [ // Question for the Title
{
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: validateInput,

},
// Question for the project Description
{
    type: "input",
    name: "description",
    message: "Please enter a description of your project.",
    validate: validateInput,
},

// Table of Contents, andling this in the markdown.js

// Question for Installation
{
    type: "input",
    name: "installation",
    message: "Please enter an explanation how to install the software, or commands for the program.",
    validate: validateInput,
},

// Question for Usage
{
    type: "input",
    name: "usage",
    message: "Please describe how we can use this program/project.",
    validate: validateInput,
},

// Question for License 
{
    type: "list",
    name: "license",
    message: "Please select a license for this project.",
    choices: [
        "BSD 3-Clause License",
        "Eclipse Public License 1.0",
        "GNU LGPLv3",
        "Apache 2.0",
        "The MIT License",
        "The Perl License",
        "The Artistic License 2.0",
    ],
},

// Question for Contributing 
{
    type: "input",
    name: "contributing",
    message: "How can users contribute to your project.",
    validate: validateInput,
},

// Question for Tests
{
    type: "input",
    name: "tests",
    message: "Please enter any testing instructions you would like to provide for this project.",
    validate: validateInput,
},

// QUESTIONS section -- github 
{
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
    validate: validateInput,
},

// QUESTIONS section -- email address
{
    type: "input",
    name: "userEmail",
    message: "What is your GitHub email address that contributors may contact?",
    validate: function (value) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            return true;
        } else {
            return "Not a valid email address. Please enter a valid email address.";
        }
    },
},
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.license = renderLicenseBadge(license);
        data.license = renderLicenseLink(license);
        data.license = renderLicenseSection(license);
        writeToFile("./example/README.md", data);
    });
}

// Function call to initialize app
init();
