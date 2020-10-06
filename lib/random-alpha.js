const randomInt = require('./random-int')

const alphas = 'abcdefghijklmnopqrstuvwxyz'

module.exports = function () {
  const idx = randomInt(0, alphas.length)
  return alphas.charAt(idx)
}
