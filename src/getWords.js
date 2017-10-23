const fs = require('fs')

exports.getWords = function (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data.split(/\r?\n/))
    })
  })
}
