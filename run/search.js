const randomInt = require('../lib/random-int')
const randomIntArray = require('../lib/random-int-array')

const searchers = [require('../src/search/binary')]

searchers.forEach((searcher) => {
  console.log('----------------------------------------')
  console.log('## ' + searcher.name.toUpperCase())
  const array = randomIntArray()
  array.sort((a, b) => a - b)
  const idx = randomInt(0, array.length)
  let value
  if (Math.random() > 0.8) {
    // 20%概率可能不存在
    value = randomInt(0, 100)
  } else {
    value = array[idx] || 0
  }
  console.log('  array: ' + array)
  console.log('  search: ' + value)
  const searched = searcher.search(array, value)
  if (array.indexOf(value) !== searched) {
    throw new Error('search error: ' + searched)
  }
  console.log('  searched index: ' + searched)
})
