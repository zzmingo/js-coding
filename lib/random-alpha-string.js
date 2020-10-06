const assignDefaults = require('./assign-opts')
const randomAlpha = require('./random-alpha')

module.exports = function (opts) {
  opts = assignDefaults(opts, {
    size: 10,
    allowDuplicate: true,
  })

  let result = ''
  while (result.length < opts.size) {
    const alpha = randomAlpha()
    if (result.indexOf(alpha) === -1) {
      result += alpha
    }
  }
  return result
}
