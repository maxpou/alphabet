exports.getStatsFirstLetter = function (words) {
  return words.reduce((accumulator, word) => {
    const firstLetter = word.substring(0,1)
    if (typeof accumulator[firstLetter] === 'undefined') {
      accumulator[firstLetter] = 1
    } else {
      accumulator[firstLetter]++
    }
    return accumulator
  }, {})
}

exports.getStatsFirstLetterRelative = function (words) {
  const nbWords = words.length
  const wordWeight = this.getStatsFirstLetter(words)

  return Object.keys(wordWeight).reduce((accumulator, letter) => {
    accumulator[letter] = wordWeight[letter] / nbWords 
    return accumulator
  }, {})
}

exports.getStatsLength = function (words) {
  return words.reduce((accumulator, word) => {
    const wordLength = word.length
    if (typeof accumulator[wordLength] === 'undefined') {
      accumulator[wordLength] = 1
    } else {
      accumulator[wordLength]++
    }
    return accumulator
  }, {})
}

exports.getStatsLengthRelative = function (words) {
  const nbWords = words.length
  const wordWeight = this.getStatsLength(words)

  return Object.keys(wordWeight).reduce((accumulator, letter) => {
    accumulator[letter] = wordWeight[letter] / nbWords 
    return accumulator
  }, {})
}

/**
 * 
 * 
 * @param {string} letter one letter
 * @param {any} words 
 * @returns 
 */
exports.nextLetterRelative = function (letter, words) {
  const regex = new RegExp(letter + "([\\w])", 'g') // ➡ /a([\w])/g
  const nextLetters = words
    .map(word => word.match(regex))
    .filter(l => l) // remove null
    .map(occurence => occurence.map(letters => letters.substring(1,2)))

  /** i.e. ['i', 'b', 'i' ...] */
  const nextLetterFlatArray = [].concat(...nextLetters)

  const matrix = nextLetterFlatArray
    .reduce((accumulator, letter) => {
      if (typeof accumulator[letter] === 'undefined') {
        accumulator[letter] = 1
      } else {
        accumulator[letter]++
      }
      return accumulator
    }, [])

    const totalNextLetter = nextLetterFlatArray.length
    return Object.keys(matrix).reduce((accumulator, letter) => {
      accumulator[letter] = matrix[letter] / totalNextLetter
      return accumulator
    }, {})
}