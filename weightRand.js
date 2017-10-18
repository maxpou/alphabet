exports.weightedRand = function (spec, precision = 100) {
  const table = []
  for (let letter in spec) {
    for (let weight = 0; weight < spec[letter] * precision; weight++) {
      table.push(letter)
    }
  }

  return table[Math.floor(Math.random() * table.length)]
}