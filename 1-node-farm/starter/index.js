const fileSystem = require('fs');

// Blocking synchronous way of reading/writing files
/*
const inputTextVariable = fileSystem.readFileSync(
  '../starter/txt/input.txt',
  'utf-8'
);
const outputTextVariable = `This is what we know about the avocado: ${inputTextVariable}.\nCreated on timestamp ${Date.now()}`;

fileSystem.writeFileSync(
  '../starter/txt/outputTextFromFS.txt',
  outputTextVariable
);
console.log('Text has been written!');
*/
