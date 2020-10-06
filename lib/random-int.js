module.exports = function (min, max) {
  return Math.ceil(Math.random() * (max - min) + min)
}
