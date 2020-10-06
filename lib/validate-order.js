module.exports = function(array, reverse) {
    if (array.length < 2) {
        throw new Error('array size is ' + array.length)
    }
    for (let i=0; i<array.length-1; i++) {
        if (reverse) {
            if (array[i] < array[i+1]) {
                throw new Error('invalid order in ' + (i+1))
            }
        } else {
            if (array[i] > array[i+1]) {
                throw new Error('invalid order in ' + (i+1))
            }
        }
    }
}