const predicate = (a) => {
  return a % 2 === 0
};

const filter = ([x, ...xs], predicate) => {
  return x == null
    ? []
    : predicate(x)
      ? [x, ...filter(xs, predicate)]
      : [...filter(xs, predicate)]
}
console.log(filter([1, 2, 3, 4, 5], predicate))

