const fs = require('fs')
const wordsStats = require('./wordsStats.js')
const wr = require('./weightRand.js')

function getWords (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) { 
        reject(err)
      }
      resolve(data.split(/\r?\n/));
    })
  })
}

// return matrix



// getWords('./words/short.txt')
getWords('./words/fr.txt')
  .then(words => {
    const matrix = nextLetterRelative('a', words)
    // console.log(matrix)

    // const wordsList = wordsStats.getStatsFirstLetterRelative(words)
    // console.log(wr.weightedRand(wordsList))

    // const wordsLength = wordsStats.getStatsLengthRelative(words)
    // console.log(wr.weightedRand(wordsLength))
    
  })
