const randomArray = require('./random-array')
const assignDefaults = require('./assign-opts')
const randomInt = require('./random-int')

module.exports = function (opts) {
  opts = assignDefaults(opts, {
    generate: (_, opts) => randomInt(opts.min, opts.max)
  })
  return randomArray(opts)
}
