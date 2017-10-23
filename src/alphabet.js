/**
 * @param {string[]} words list of words
 * @returns {string[]} array of unique caracters
 */
exports.getLetters = function (words) {
  const letters = words
    .reduce((accumulator, word) => {
      const wordLetters = [...new Set(word.split(''))]
      accumulator = accumulator.concat(wordLetters)
      return [...new Set(accumulator)]
    }, [])
    .filter(letter => /[A-zÀ-ÿ]/.test(letter))

  return letters.sort()
}
