module.exports = function shuffle(arr) {
  let result = []
  arr = arr.slice()
  while (arr.length > 0) {
    let random = Math.floor(Math.random() * arr.length)
    result.push(arr[random])
    arr.splice(random, 1)
  }
  return result
}
