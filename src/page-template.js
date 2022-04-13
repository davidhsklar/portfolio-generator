const inquirer = require('inquirer');


    


module.exports = (name, github) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
    
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
  };

  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: "What's your first name",
    },
    {
      type: 'input',
      name: 'last_name',
      message: "What's your last name",
      default() {
        return 'Sklar';
      }}]);
  