/**
 * 每次循环选取一个最小的数字放到前面的有序序列中
 *
 * 时间复杂度：O(n2)
 * 空间复杂度:O(1)
 *
 * 不稳定
 */

module.exports = {
  name: 'select',
  sort: function (array) {
    for (let i = 0; i < array.length; i++) {
      let minIdx = i
      let min = array[minIdx]
      for (let j = i + 1; j < array.length; j++) {
        let v = array[j]
        if (v < min) {
          min = v
          minIdx = j
        }
      }
      let temp = array[i]
      array[i] = min
      array[minIdx] = temp
    }
    return array
  },
}
