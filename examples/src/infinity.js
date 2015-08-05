function* allsGen() {
  let num = 1

  while(true) {
    yield num++
  }
}

function* evensGen() {
  let num = 0

  while(true) {
    yield num = num + 2
  }
}

const evens = evensGen()
const alls = allsGen()

function* zipGen(first, second) {
  let infinite = true

  while(infinite) {
    const firstYield = first.next()
    const secondYield = second.next()

    if (firstYield.done === true && secondYield.done === true) {
      infinite = false
    } else {
      yield {first: firstYield.value, second: secondYield.value}
    }
  }
}

const allsAndEvens = zipGen(alls, evens)

console.log(allsAndEvens.next())
console.log(allsAndEvens.next())
console.log(allsAndEvens.next())
