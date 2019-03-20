const fs = require('fs')
const mimes = require('./mimes.js')

function walk(reqpath) {
  const files = fs.readdirSync(reqpath)

  const dirList = [], fileList = []

  for (let i= 0, len = files.length; i < len; i++) {
    const item = files[i]
    const itemArr = item.split('\.')
    const itemMime = (itemArr.length > 1) ? itemArr[itemArr.length - 1] : 'undefined'

    typeof mimes[itemMime] === 'undefined' ? dirList.push(files[i]) : fileList.push([files[i]])
  }

  return dirList.concat(fileList)
}

module.exports = walk
