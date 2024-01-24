const map = (fn) => ([x, ...xs]) => {
  if (x == null) return [];
  return [fn(x), ...map(fn)(xs)]
}
const upper = (s) => s.toUpperCase()
const split = s => [...s];
const head = arr => arr[0];
const join = (arr) => arr.join("")

const compose = (fn1, fn2) => (a) => fn1(fn2(a));
const firstCapital = compose(join, compose(([x, ...xs]) => [upper(x), ...xs], split));
const allCapital = compose(join, compose(map(upper), split));
console.log(allCapital('cat'))

const filter = predicate => ([x, ...xs]) => {
  if (x == null) {
    return []
  }
  return predicate(x)
    ? [x, ...filter(predicate)(xs)]
    : filter(predicate)(xs)
}
const reduceLeft = (fn, initVal) => ([x, ...xs]) => {
  return x == null
    ? initVal
    : reduceLeft(fn, fn(initVal, x))(xs)
}

const checkElement = (article) => article.tag === "h2";
const filterHeading = (heading) => heading.id != null;
const getHeading = (acc, {text, id}) => [...acc, {text, id}];
const createToC = (preparedArticle) => ({tag: "li", ...preparedArticle})

const ARTICLES = [
  {
    tag: "p",
    text: "Hey, you watch something nowadays, what is it, huh? Nothing. Its twists, violence, drama, no message. What's the point?",
  },
  {
    tag: "h2",
    text: "You look like every white homeless man I've ever seen.",
    id: "Lemon",
    somethingUnimportant: "Brother of Mandarin"
  },
  {
    tag: "h1",
    text: "You're a 'Diesel!'",
    id: "Lemon2",
    somethingUnimportant: "Brother of Mandarin"
  },
  {
    tag: "h2",
    text: "You bleed out of your fucking eye socket.",
    id: "The Hornet"
  },
  {
    tag: "h2",
    text: "Listen. The White Death is the farmer.",
  },
  {
    tag: "h2",
    text: "Everything that's ever happened has led you here. Fate.",
    id: "The Elder1",
    somethingUnimportant: "Japanese man"
  },
  {
    tag: "h3",
    text: "I think you might be forgetting what you do for a living. Take the gun.",
    id: "Maria"
  },
  {
    tag: "p",
    text: "People think I'm just some young girl. Someone's future wife, or future mother. But I'm not in someone else's story. You're all in mine.",
  },
  {
    tag: "h2",
    text: "A father's job is to protect his family.",
    id: "The Elder2"
  },
]

const ToC = compose(map(createToC), compose(reduceLeft(getHeading, []), compose(filter(checkElement), filter(filterHeading))))
console.log(ToC(ARTICLES))
