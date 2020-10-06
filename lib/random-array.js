const assignDefaults = require('./assign-opts')

module.exports = function (opts) {
  opts = assignDefaults(opts, {
    size: 10,
    min: 0,
    max: 100,
    allowDuplicate: true,
    generate: (array, opts) => 0,
    contains: (array, value, opts) => array.indexOf(value) !== -1
  })
  
  const array = []
  while (array.length < opts.size) {
    if (opts.allowDuplicate) {
      const value = opts.generate(array, opts)
      array.push(value)
    } else {
      while (true) {
        const value = opts.generate(array, opts)
        if (!opts.contains(array, value, opts)) {
          array.push(value)
          break
        }
      }
    }
  }
  return array
}
