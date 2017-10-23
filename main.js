const fs = require('fs')
const wg = require('./src/wordGenerator.js')

function getWords (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data.split(/\r?\n/))
    })
  })
}

// getWords('./words/short.txt')
getWords('./words/fr.txt')
  .then(words => words.filter(word => word.toLowerCase() === word))
  .then(words => {
    console.log(wg.wordGenerator(words))
  })
