/**
 * 快速排序：通过一趟排序将要排序的数据分割成独立的两部分，
 * 其中一部分的所有数据比另一部分的所有数据要小，再按这种
 * 方法对这两部分数据分别进行快速排序，整个排序过程可以递归
 * 进行，使整个数据变成有序序列。
 *
 * 时间复杂度：平均 O(nlogn)，最坏 O(n2)，实际上大多数情况下小于O(nlogn)
 * 空间复杂度: O(logn)（递归调用消耗）
 *
 * 不稳定
 */
module.exports = {
  name: 'quick',
  sort: function (array) {
    quickSort(array, 0, array.length - 1)
    return array
  },
}

function quickSort(array, start, end) {
  if (end - start < 1) {
    return
  }

  const pivot = array[start] // 基准

  let idx = start + 1

  for (let i = start + 1; i <= end; i++) {
    let v = array[i] // 1
    if (v < pivot) {
      if (idx !== i) {
        array[i] = array[idx]
        array[idx] = v
      }
      idx++
    }
  }

  let temp = array[idx - 1]
  array[idx - 1] = pivot
  array[start] = temp

  quickSort(array, start, idx - 2)
  quickSort(array, idx, end)
}
