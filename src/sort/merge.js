/**
 * 利用归并的思想实现的排序方法, 将数组从中点进行分割，
 * 分为左、右两个数组, 递归分割左、右数组，直到数组长度小于2
 *
 * 时间复杂度：O(nlogn)
 * 空间复杂度: O(n)
 *
 * 稳定
 */

module.exports = {
  name: 'marge',
  sort: function (array) {
    mergeSort(array, 0, array.length - 1, [])
    return array
  },
}

function mergeSort(array, start, end, temp) {
  if (start >= end) {
    return
  }

  const mid = Math.floor((start + end) / 2)
  mergeSort(array, start, mid, temp)
  mergeSort(array, mid + 1, end, temp)
  merge(array, start, end, temp)
}

function merge(array, start, end, temp) {
  const mid = Math.floor((start + end) / 2)

  let idx1 = start
  let idx2 = mid + 1
  let tempIdx = 0

  while (idx1 <= mid && idx2 <= end) {
    let a = array[idx1]
    let b = array[idx2]
    if (a < b) {
      temp[tempIdx] = a
      tempIdx++
      idx1++
    } else {
      temp[tempIdx] = b
      tempIdx++
      idx2++
    }
  }

  while (idx1 <= mid) {
    temp[tempIdx] = array[idx1]
    tempIdx++
    idx1++
  }

  while (idx2 <= end) {
    temp[tempIdx] = array[idx2]
    tempIdx++
    idx2++
  }

  tempIdx = 0
  for (let i = start; i <= end; i++) {
    array[i] = temp[tempIdx++]
  }
}
