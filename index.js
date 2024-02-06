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
        default : 'Title_' + Math.random() * 100
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of the project : ',
        default : 'No description provided.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions : ',
        default : 'No installation instruction needed'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use the application :',
        default : 'No use case scenario.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter details on how to correctly use your application...',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the License you used for this project...',
        choices: ['MIT', 'GPLv2', 'Apache', 'Other']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter details of anyone who contributed to this application...',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please state here any tests that took place...'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please link your github here...'
    },
    {
        type: 'input',
        name: 'email',
        message: 'And finally, what is your email address...'
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
