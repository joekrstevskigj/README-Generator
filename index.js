const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of the project : ',
        default: 'Title_' + Math.round(Math.random() * 100)
    },
    {
        type: 'input',
        name: 'project_desc',
        message: 'Description of the project : ',
        default: 'No description provided.'
    },
    {
        type: 'input',
        name: 'installation_descr',
        message: 'Installation instructions : ',
        default: 'No installation instruction needed'
    },

    {
        type: 'input',
        name: 'usage_descr',
        message: 'Describe how to use the application :',
        default: 'No use case scenario.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose type of License :',
        choices: ['MIT', 'GPLv2', 'Apache', 'Other'],
        default: 0
    },
    {
        type: 'input',
        name: 'contrib',
        message: 'Explain how to contribute to this project :',
        default: 'No contributing instructions'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe tests used for this application :',
        default: 'No tests are included'
    },
    {
        type: 'input',
        name: 'user_git',
        message: 'Enter author github user : ',
        default: ''
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter e-mail for answering any questions about the project : ',
        default: ''
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log(`${fileName} generated!`);
}

// function to initialize program
function init() {
    console.log("Let's generate README file for your project. Please answer few simple questions: ");
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            //console.log(readmeContent);
            writeToFile("README.md", readmeContent);
        })
        .catch((error) => console.error("Error:", error));
}

// function call to initialize program
init();
