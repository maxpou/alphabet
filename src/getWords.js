const fs = require('fs')
const {promisify} = require('util')
const readFileAsync = promisify(fs.readFile)

/**
 * @async
 * @param {string} fileName
 * @returns {string[]} words in the given file
 */
exports.getWords = async function (fileName) {
  const data = await readFileAsync(fileName, {encoding: 'utf8'})
  return data
    .split(/\r?\n/)
    .map(word => word.toLowerCase())
    .sort()
}
