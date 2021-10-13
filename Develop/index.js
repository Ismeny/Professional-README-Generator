// TODO: Include packages needed for this application
//const readMeGen = require('./generateMarkdown');

const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please write a brief description of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please explain how to install your project:',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Please explain how to use your project:',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'Please choose your license',
        choices: [
            'None',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense',
        ],
        name: 'license',
      },
      {
        type: 'input',
        message: 'Please list any contributors',
        name: 'contributors',
      },
      {
        type: 'input',
        message: 'Please list any test instructions for your project',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Please enter email address where you can be contacted for any questions regarding your project',
        name: 'questions',
      },
  ])
  .then((data) => {
    console.log(data)
    let title = data.title
    console.log(data.title);
    let description = data.description
    console.log(data.description);
    let installation = data.installation
    console.log(data.installation);
    let usage = data.usage
    console.log(data.usage);
    let license = data.license
    console.log(data.license);
    let contributors = data.contributors
    console.log(data.contributors);
    let tests = data.tests
    console.log(data.tests);
    let questions = data.questions
    console.log(data.questions);

   
  }
  )
];


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     const fs = require('fs');

//     fs.writeFile('log.txt', process.argv[3], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );
// }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


