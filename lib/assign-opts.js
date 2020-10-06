module.exports = function (opts, defaults) {
  if (!opts) {
    opts = {}
  }
  Object.keys(defaults).forEach(key => {
      if (opts[key] === undefined) {
        opts[key] = defaults[key]
      }
  })
  return opts
}
