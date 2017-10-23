const program = require('commander')
const gw = require('./src/getWords.js')
const wg = require('./src/wordGenerator.js')

program
  .option('-f, --file [fileName]', 'Define the dataset [fr]', 'fr')
  .option('-q, --quantity [number]', 'Words to create [5]', 5)
  .parse(process.argv)

gw.getWords('./data-set/' + program.file + '.txt')
  .then(words => words.filter(word => word.toLowerCase() === word))
  .then(words => {
    console.log(wg.wordsGenerator(words, program.quantity))
  })
