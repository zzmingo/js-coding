const randomIntArray = require('../../lib/random-int-array')
const shuffle = require('../../lib/shuffle')

const result = []
const array = randomIntArray()
const shuffled = shuffle(array)
const sum = shuffled[0] + shuffled[1] + shuffled[2] + shuffled[3]
const n = 4

console.log('array: ' + array)

function getResult(array, result, n, sum, prev, prevSum) {
  if (prev.length === n) {
    if (prevSum === sum) {
      result.push(prev.slice(0))
      return true
    }
    return
  }

  for (let i = 0; i < array.length; i++) {
    let v = array.shift()
    prev.push(v)
    const ok = getResult(array, result, n, sum, prev, prevSum + v)
    if (ok) {
      return
    }
    prev.pop()
    array.push(v)
  }
  return false
}

getResult(array, result, n, sum, [], 0)

result.forEach((arr) => {
  console.log('result: ' + arr)
})
