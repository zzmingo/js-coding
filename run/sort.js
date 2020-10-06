const randomIntArray = require('../lib/random-int-array')
const validateOrder = require('../lib/validate-order')

const sorters = [
  require('../src/sort/quick'),
  require('../src/sort/insert'),
  require('../src/sort/bubble'),
  require('../src/sort/select'),
  require('../src/sort/merge'),
]

sorters.forEach((sorter) => {
  console.log('----------------------------------------')
  console.log('## ' + sorter.name.toUpperCase())
  const array = randomIntArray()
  console.log('  array:  ' + array)
  const sorted = sorter.sort(array)
  validateOrder(sorted)
  console.log('  sorted: ' + sorted)
})
