const fs = require('fs')

function file(filepath) {
  return fs.readFileSync(filepath, 'binary')
}

module.exports = file
