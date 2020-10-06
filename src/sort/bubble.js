/**
 * 循环数组，比较当前元素和下一个元素，如果当前元素比下一个元素大，向上冒泡。
 * 这样一次循环之后最后一个数就是本数组最大的数。下一次循环继续上面的操作，
 * 不循环已经排序好的数。
 *
 * 时间复杂度：O(n2)
 * 空间复杂度:O(1)
 *
 * 稳定
 */

module.exports = {
  name: 'bubble',
  sort: function (array) {
    for (let i = 0; i < array.length; i++) {
      let done = true
      for (let j = 0; j < array.length - 1 - i; j++) {
        let v1 = array[j]
        let v2 = array[j + 1]
        if (v1 > v2) {
          array[j + 1] = v1
          array[j] = v2
          done = false
        }
      }
      if (done) {
        break
      }
    }
    return array
  },
}
