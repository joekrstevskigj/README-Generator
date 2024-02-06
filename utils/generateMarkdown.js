const { encode } = require("punycode");

// function to generate markdown for README
function generateMarkdown(data) {
  
  const linceseIcon = `![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)`;

  return `# ${linceseIcon} ${data.title} 
  ## Description
  ${data.project_desc}

  ## Table Of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation_descr}

  ## Usage 
  ${data.usage_descr}

  ## License 
  This project is licensed under the ${data.license} license. 

  ## Contributing  
  ${data.contrib}

  ## Tests
  ${data.tests}

  ## Questions
  Any questions? Email contact is:  ${data.email}
  Author : [${data.user_git}](https://github.com/${data.user_git})
  `;
}



module.exports = generateMarkdown;
