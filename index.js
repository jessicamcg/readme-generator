// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Enter a description for your project: ',
        name: 'description'
      },
      {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation'
      },
      {
        type: 'input',
        message: 'What are the usage instructions?',
        name: 'usage'
      },
      {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contributing'
      },
      {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test'
      },
      {
        type: 'rawlist',
        message: 'Which license is the application covered under?',
        name: 'license',
        choices: ['MIT','GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','Boost Software License 1.0','The Unlicense']
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
      }
];



// TODO: Create a function to write README file
function writeToFile(data) {
    fs.appendFile('sampleREADME.md', generateMarkdown(data), (err) =>
       err ? console.error(err) : console.log('Success!'));
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>{
            console.log(response);
            writeToFile(response);
        });
};

// Function call to initialize app
init();
