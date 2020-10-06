const array = 'abcesfcsadee'.split('')
const path = 'bcced'

function containsPath(array, rows, cols, path) {
  const flags = array.slice().fill(false)
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (contains(array, rows, cols, r, c, path, flags, 0)) {
        return true
      }
    }
  }
}

function contains(array, rows, cols, r, c, path, flags, cursor) {
  if (r < 0 || c < 0) {
    return false
  }
  if (r >= rows || c >= cols) {
    return false
  }

  const idx = r * cols + c
  if (flags[idx]) {
    return false
  }

  // 找到
  if (cursor === path.length - 1) {
    return true
  }

  if (path[cursor] !== array[idx]) {
    return false
  }

  flags[idx] = true
  cursor++
  if (contains(array, rows, cols, r + 1, c, path, flags, cursor)) {
    return true
  }
  if (contains(array, rows, cols, r, c + 1, path, flags, cursor)) {
    return true
  }
  if (contains(array, rows, cols, r - 1, c, path, flags, cursor)) {
    return true
  }
  if (contains(array, rows, cols, r, c - 1, path, flags, cursor)) {
    return true
  }
  flags[idx] = false

  return false
}

if (containsPath(array, 3, 4, path)) {
  console.log('yes')
} else {
  console.log('no')
}
