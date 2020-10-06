module.exports = {
  name: 'binary',
  search: function (array, value) {
    return binarySearch(array, value, 0, array.length - 1)
  },
}

function binarySearch(array, value, start, end) {
  if (start > end) {
    return -1
  }

  const mid = Math.floor((end + start) / 2)
  const midV = array[mid]
  if (value === midV) {
    return mid
  } else if (value < midV) {
    return binarySearch(array, value, start, mid - 1)
  } else {
    return binarySearch(array, value, mid + 1, end)
  }
}
