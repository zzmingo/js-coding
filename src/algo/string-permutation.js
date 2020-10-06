const randomAlphaString = require('../../lib/random-alpha-string')

const str = randomAlphaString({ size: 4 })
const result = []
const array = str.split('')

function permutation(array, result, prev) {
  if (array.length === 0) {
    result.push(prev)
    return
  }

  for (let i = 0; i < array.length; i++) {
    let ch = array.shift()
    permutation(array, result, prev + ch)
    array.push(ch)
  }
}

permutation(array, result, '')

result.forEach((item) => {
  console.log(item)
})
