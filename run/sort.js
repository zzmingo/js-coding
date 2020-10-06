const randomIntArray = require('../lib/random-int-array')
const validateOrder = require('../lib/validate-order')

const sorters = [require('../src/sort/quick'), require('../src/sort/insert')]

sorters.forEach((sorter) => {
  console.log('## start sort: ' + sorter.name)
  const array = randomIntArray()
  console.log('  array:  ' + array)
  const sorted = sorter.sort(array)
  validateOrder(sorted)
  console.log('  sorted: ' + sorted)
  console.log('---------------')
})
