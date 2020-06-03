function generateMarkdown(data) {
  console.log(data);

  var licenseBadge = "";
  var licenseSection = "";
  if (data.license !== "None"){
    licenseBadge = `[![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

Project URL: [${data.title}](https://github.com/${data.github}/${data.title.toLowerCase()})`;
    licenseSection = `Project License: ${data.license} license.`;
  }

  return `
# ${data.title}
${licenseBadge}

## Description
${data.description}

## Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## License
${licenseSection}

## Contributing
${data.contributing}

## Tests
To run tests, run the following command:
\`\`\`
${data.test}
\`\`\`

## Questions
If you have any questions about the repo, open an issue or contact [${data.github}](${data.url}) directly at ${data.email}.
`;
}

module.exports = generateMarkdown;
