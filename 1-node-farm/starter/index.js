const fileSystem = require('fs');
const http = require('http');

// File System NodeJS API
/*

// Blocking synchronous way of reading/writing files

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


try {
  // Non blocking asynchronous way of reading/writing files.
  fileSystem.readFile(
    './txt/start123456.txt',
    'utf-8',
    function callbackFn(error1, data1) {
      // Error handling - basic
      if (error1) {
        //console.log('Error encountered!');
        //return;
        throw error1;
      }

      console.log(data1);
      lineSeparator();

      fileSystem.readFile(`./txt/${data1}.txt`, 'utf-8', (error2, data2) => {
        console.log(data2);

        fileSystem.readFile('./txt/append.txt', 'utf8', (error3, data3) => {
          console.log(data3);
          const dataToWrite = `${data2}\n${data3}`;
          const pathToWriteData = './txt/finalAsyncWrittenFile.txt';
          lineSeparator();

          fileSystem.writeFile(
            pathToWriteData,
            dataToWrite,
            'utf-8',
            (error4) => {
              console.log(
                'Your file has been written asynchronously in non-blocking execution way.'
              );
              lineSeparator();

              // Variable - pathToWriteData accessed thanks to closure
              fileSystem.readFile(pathToWriteData, 'utf-8', (error5, data4) => {
                console.log(data4);
              });
            }
          );
        });
      });
    }
  );
} catch (err) {
  console.log('Logging ERROR');
  console.log(err);
}

console.log('Print console log message.');
lineSeparator();

// Hoisted Fn
function lineSeparator() {
  console.log('-'.repeat(35));
}
*/

// http server NodeJS API
const nodeServer = http.createServer(function (requestObj, responseObj) {
  responseObj.end('Request just hit the server!');
});

nodeServer.listen(8000, '127.0.0.1', function () {
  console.log('Listening to requests on port: 8000');
});
