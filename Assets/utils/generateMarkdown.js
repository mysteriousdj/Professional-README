// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (value === "BSD 3-Clause License") {
    return "(https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
} else if (value === "Eclipse Public License") {
    return "(https://img.shields.io/badge/License-GPLv3-blue.svg)]";
} else if (value === "GNU LGPLv3") {
    return "(https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]";
} else if (value === "Apache 2.0") {
    return "(https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
} else if (value === "The MIT License") {
    return "(https://img.shields.io/badge/License-MIT-yellow.svg)]";
} else if (value === "The Perl License") {
    return "(https://img.shields.io/badge/License-Perl-0298c3.svg)]";
} else if (value === "The Artistic License 2.0") {
    return "(https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
}else {
  return;
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (value === "BSD 3-Clause License") {
    return "(https://opensource.org/licenses/BSD-3-Clause))";
} else if (value === "Eclipse Public License") {
    return "(https://www.gnu.org/licenses/gpl-3.0)";
} else if (value === "GNU LGPLv3") {
    return "(https://www.gnu.org/licenses/agpl-3.0)";
} else if (value === "Apache 2.0") {
    return "(https://opensource.org/licenses/Apache-2.0)";
} else if (value === "The MIT License") {
    return "(https://opensource.org/licenses/MIT)";
} else if (value === "The Perl License") {
    return "(https://opensource.org/licenses/Artistic-2.0)";
} else if (value === "The Artistic License 2.0") {
    return "(https://opensource.org/licenses/Artistic-2.0)";
}else {
  return;
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (value === "BSD 3-Clause License") {
  return "[![License: BSD 3-Clause]";
} else if (value === "Eclipse Public License") {
  return "[![License: EPL 1.0]";
} else if (value === "GNU LGPLv3") {
  return "[![License: AGPL v3]";
} else if (value === "Apache 2.0") {
  return "[![License]";
} else if (value === "The MIT License") {
  return "[![License: MIT]";
} else if (value === "The Perl License") {
  return "[![License: Artistic-2.0]";
} else if (value === "The Artistic License 2.0") {
  return "[![License: Artistic-2.0]";
}else {
return;
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(value) {
  return `# ${value.title}
  ${value.license}
  # Description
  ${value.description}
  # Table of Contents 
  * [Installation](#-Installation)
  * [Usage](#-Usage)
  * [License](#-Installation)
  * [Contributing](#-Contributing)
  * [Tests](#-Tests)
  * [Questions](#-Contact-Information)
      
  # Installation
  ${value.installation}
  # Usage
  ${value.usage}
  # License 
  ${value.license}
  * As this license list was not comprehensive, if you need another license, use the contact information below to ask for license to be added. 
  # Contributing 
  ${value.contributing}
  # Tests
  ${value.tests}
  # Contact Information 
  * GitHub Username: ${value.userName}
  * Contact Email: ${value.userEmail}

`;
}

//need to export the generateMarkdown function 
module.exports = generateMarkdown;
