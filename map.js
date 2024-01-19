const add = (a) => (b) => {
  return a + b
};

const map = (array, fn) => {
  const pushElements = (arr, res, ind, fn) => {
    if (ind === arr.length) return res

    res.push(fn(arr[ind]))

    return pushElements(arr, res, ++ind, fn)
  }

  return pushElements(array, [], 0, fn)
}

console.log(map([1, 2, 3, 4, 5], add(1)))
