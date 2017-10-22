/**
 * 
 * 
 * @param {any} spec 
 * @param {number} [precision=100] 
 * @returns a matrix value
 */
exports.weightedRand = function (matrix, precision = 100) {
  const table = []
  for (let letter in matrix) {
    for (let weight = 0; weight < matrix[letter] * precision; weight++) {
      table.push(letter)
    }
  }

  return table[Math.floor(Math.random() * table.length)]
}
