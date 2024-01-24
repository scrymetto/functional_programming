const predicate = (a) => {
  return a % 2 === 0
};

const filter = ([x, ...xs], predicate) => {
  if (x == null) {
    return []
  }
  return predicate(x)
    ? [x, ...filter(xs, predicate)]
    : filter(xs, predicate)
}
// console.log(filter([1, 2, 3, 4, 5], predicate))

const reduceLeft = (fn, [x, ...xs], initVal) => {
  return x == null
    ? initVal
    : reduceLeft(fn, xs, fn(initVal, x))
}

const filterR = (fn, [x, ...xs]) => {
  if (x == null) return []
  const newFunc = (fn) => (acc, curr) => fn(curr) ? [...acc, curr] : acc
  return reduceLeft(newFunc(fn), xs, [])
}
console.log(filterR(predicate, [1, 2, 3, 4, 5]))
