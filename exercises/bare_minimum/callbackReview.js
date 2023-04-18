/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  // hello
  // world        ---> [hello, world, blah blah] ---> hello
  // blah  blah
  fs.readFile(filePath, 'utf8', function (err, content) {
    if (err) {
      callback(err);
    } else {
      callback(null, content.split('\n')[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
// request.get()
var getStatusCode = function (url, callback) {
  // TODO
  request.get(url, function(err, response) {
    if (err) {
      callback(err);
    } else {
       callback(null, response.statusCode);
    }
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
