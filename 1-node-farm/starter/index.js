const fileSystem = require('fs');

const inputText = fileSystem.readFileSync('../starter/txt/input.txt', 'utf-8');
const outputText = `This is what we know about the avocado: ${inputText}.\nCreated on timestamp ${Date.now()}`;
fileSystem.writeFileSync('../starter/txt/outputTextFromFS.txt', outputText);

console.log(outputText);
