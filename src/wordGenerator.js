const ws = require('./wordsStats')
const wr = require('./weightRand.js')
const alphabet = require('./alphabet.js')

/**
 * Generate multiple words based on a set of words
 *
 * @param {string[]} words original data set
 * @param {number} [quantity=1] quantity of words to create
 * @returns {string[]} list of new words
 */
exports.wordsGenerator = function (words, quantity = 1) {
  const allLetters = alphabet.getLetters(words)
  const wordsLengthStats = ws.getStatsLengthRelative(words)
  const firstLetterStats = ws.getStatsFirstLetterRelative(words)
  const lastLetterStats = ws.getStatsLastLetter(words)
  const allNextLetterStats = allLetters.map(letter => {
    return {
      letter: letter,
      stats: ws.nextLetterRelative(letter, words)
    }
  })

  return Array
    .apply(null, {length: quantity})
    .map(word => wordGenerator(wordsLengthStats, firstLetterStats, lastLetterStats, allNextLetterStats))
}

/**
 * Generate a new word base on matrix pass into parameters
 *
 * @param {Object} wordsLengthStats (matrix)
 * @param {Object} firstLetterStats (matrix)
 * @param {Object} lastLetterStats (matrix)
 * @param {Object} allNextLetterStats (matrix)
 * @returns {string} 1 new generated word
 */
const wordGenerator = function (wordsLengthStats, firstLetterStats, lastLetterStats, allNextLetterStats) {
  const newWordLength = wr.weightedRand(wordsLengthStats)
  const newWord = Array.apply(null, {length: newWordLength})

  newWord.map((letter, index) => {
    let nextLetter
    if (index === 0) {
      nextLetter = wr.weightedRand(firstLetterStats)
    } else if (index === (newWord.length - 1)) {
      nextLetter = wr.weightedRand(lastLetterStats.stats)
    } else if (index > 0) {
      const previousLetter = newWord[(index - 1)]
      const nextLetterStats = allNextLetterStats.find(item => item.letter === previousLetter)
      nextLetter = wr.weightedRand(nextLetterStats.stats)
    }
    newWord[index] = nextLetter
  })

  return newWord.join('')
}
