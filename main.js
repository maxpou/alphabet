const fs = require('fs')
const ws = require('./src/wordsStats')
const wr = require('./src/weightRand.js')
const alphabet = require('./src/alphabet.js')

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



// getWords('./words/short.txt')
getWords('./words/fr.txt')
  .then(words => words.filter(word => word.toLowerCase() === word))
  .then(words => {
    // const matrix = ws.nextLetterRelative('a', words)
    // console.log(matrix)

    const allLetters = alphabet.getLetters(words)
    // console.log(allLetters)

    const matrix = allLetters.map(letter => {
      return {
        letter: letter,
        stats: ws.nextLetterRelative(letter, words)
      }
    })
    console.log(matrix)
    

    // const wordsList = ws.getStatsFirstLetterRelative(words)
    // console.log(wr.weightedRand(wordsList))

    // const wordsLength = ws.getStatsLengthRelative(words)
    // console.log(wr.weightedRand(wordsLength))
    
  })
