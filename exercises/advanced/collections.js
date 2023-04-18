/**
 * Using Promise.all, write a function, combineFirstLineOfManyFiles, that:
 *    1. Reads each file at the path in the `filePaths` array
 *    2. Plucks the first line of each file
 *    3. Joins each first line into a new file
 *      - The lines should be in the same order with respect to the input array
 *      - i.e. the second line in the new file should be the first line of `filePaths[1]`
 *    4. Writes the new file to the file located at `writePath`
 */
/*
  [file1, file2] --> [file1 first line, file2 first line]
--->
file1 first line
file2 first line

Promise.all([getFirstLine(file1), getFirstLine(file2)])   // resolves []
.then((array) => fs.writeFile(writePath, array.join(\n))


Promise.all(filePaths.map((filePath) => getFirstLine(filePath)))
  .then((array) => fs.writeFile(writePath, array.join(\n))

  .catch((error) => console.error(error.stack))

*/

const getFirstLine = require('../bare_minimum/promiseConstructor').pluckFirstLineFromFileAsync;
const fs = require('fs');
const Promise = require('bluebird');
// Promise.promisifyAll(fs);
// fs.writeFileAsync

//fs.writeFile(path, content, cb)
const writeFileAsync = Promise.promisify(fs.writeFile);

var combineFirstLineOfManyFiles = function(filePaths, writePath) {
  return Promise.all(filePaths.map((filePath) => getFirstLine(filePath)))
    .then((firstLines) => writeFileAsync(writePath, firstLines.join('\n')))
    .catch(error => console.log(error));
};

// Export these functions so we can unit test them
module.exports = {
  combineFirstLineOfManyFiles: combineFirstLineOfManyFiles
};