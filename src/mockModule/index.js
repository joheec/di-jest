const fs = require('fs');

function listFiles(directory) {
  return fs.readdirSync(directory).map(fileName => ({
    directory,
    fileName,
  }));
}

exports.listFiles = listFiles;
