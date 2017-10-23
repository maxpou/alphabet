const ws = require('./wordsStats')
const wr = require('./weightRand.js')
const alphabet = require('./alphabet.js')

exports.wordGenerator = function (words) {
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

  const newWordLength = wr.weightedRand(wordsLengthStats)
  const newWord = []
  newWord.length = newWordLength
  newWord.fill(null)

  newWord.forEach((letter, index) => {
    let nextLetter
    if (index === 0) {
      nextLetter = wr.weightedRand(firstLetterStats)
    } else if (index === (newWord.length - 1)) {
      nextLetter = wr.weightedRand(lastLetterStats.stats)
    } else if (index > 0) {
      const previousLetter = newWord[(index - 1)]
      const nextLetterStats = allNextLetterStats.find(item => item.letter === previousLetter)
      nextLetter = wr.weightedRand(nextLetterStats.stats)
      // console.log(nextLetter)
    }
    newWord[index] = nextLetter
  })

  return newWord.join('')
}
