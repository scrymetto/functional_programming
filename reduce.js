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
// console.log(reduceLeft((acc, item) => [item, ...acc], [1, 2, 3, 4], []))
// console.log(reduceLeft(switchOn, ['light', 'water', 'gas', 'pain'], {}))

const reduceRight = (fn, array, initVal) => {
  const reduce = (fun, wholeArray, initValue, ind) => {
    if (ind < 0) return initValue
    return reduce(fun, wholeArray, fun(initValue, wholeArray[ind]), --ind)
  }

  return reduce(fn, array, initVal, array.length - 1)
}
// console.log(reduceRight(sum, [1, 2, 3, 4], 0))
// console.log(reduceRight(switchOn, ['light', 'water', 'gas', 'pain'], {}))

const reduceRight2 = (fn, [x, ...xs], initVal) => {
  return x == null
    ? initVal
    : fn(reduceRight2(fn, xs, initVal), x)
}
// console.log(reduceRight2(sum, [1, 2, 3, 4], 0))
// console.log(reduceLeft((acc, item) => [item, ...acc], [1, 2, 3, 4], []))
// console.log(reduceRight2(switchOn, ['light', 'water', 'gas', 'pain'], {}))
