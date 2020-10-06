/**
 * 将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。
 * 插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。
 *
 * 时间复杂度：O(n2)
 * 空间复杂度:O(1)
 *
 * 稳定
 */

module.exports = {
  name: 'insert',
  sort: function (array) {
    for (let i = 1; i < array.length; i++) {
      const v = array[i]
      let target = i

      // 往前比较
      for (let j = i - 1; j >= 0; j--) {
        let prev = array[j]
        if (v < prev) {
          array[j] = v
          array[target] = prev
          target = j
        } else {
          break
        }
      }
    }
    return array
  },
}
