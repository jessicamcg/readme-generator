// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ``;
  switch (license) {
    case 'Apache License 2.0':
      badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        break;
    case 'GNU General Public License 3.0':
      badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`; 
        break;
    case 'MIT License':
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        break;
    case 'BSD 2-Clause "Simplified" License':
      badge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
        break;
    case 'BSD 3-Clause "new" or "Revised" License':
      badge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
        break;
    case 'Boost Software License':
      badge = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`; 
        break;
    case 'Creative Commons Zero 1.0 Universal':
      badge = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
        break;
    case 'Eclipse Public License 2.0':
      badge = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
        break;
    case 'GNU Affero General Public License 3.0':
      badge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
        break;
    case 'GNU General Public License 2.0':
      badge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
        break;
    case 'Mozilla Public License 2.0':
      badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        break;
    case 'The Unlicense':
      badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
        break;
    default:
        break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   return ``
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  
  ` +
  renderLicenseBadge(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}


## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
https://github.com/${data.username}

${data.email}

` + renderLicenseSection(data.license);
}

module.exports = generateMarkdown;
