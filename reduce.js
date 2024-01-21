const sum = (prev, curr) => {
  return prev + curr
}
const switchOn = (prev, curr) => {
  prev[curr] = true;
  return prev
}

const reduceLeft = (fn, [x, ...xs], initVal) => {
  return x == null
    ? initVal
    : reduceLeft(fn, xs, fn(initVal, x))
}
console.log(reduceLeft(sum, [1, 2, 3, 4], 0))
console.log(reduceLeft(switchOn, ['light', 'water', 'gas', 'pain'], {}))

// const reduceRight = (fn, array, result) => {
// }
// console.log(reduceRight(sum, [1, 2, 3, 4]))
// console.log(reduceRight(switchOn, ['light', 'water', 'gas', 'pain'], {}))

