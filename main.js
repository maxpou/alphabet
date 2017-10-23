const gw = require('./src/getWords.js')
const wg = require('./src/wordGenerator.js')

var program = require('commander');

program
  .option('-f, --file [fileName]', 'Define the dataset [fr]', 'fr')
  .parse(process.argv)

gw.getWords('./data-set/' + program.file + '.txt')
  .then(words => words.filter(word => word.toLowerCase() === word))
  .then(words => {
    console.log(wg.wordGenerator(words))
  })
