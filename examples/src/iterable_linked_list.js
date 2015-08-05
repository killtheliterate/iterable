const IterableList = function () {
  return {
    values: {value: null, rest: null},

    add (value) {
      const traverse = (values) => {

        // initialize empty list
        if (values.value === null) {
          this.values.value = value

            return this
        } else if (values.rest === null) {
          values.rest = {
            value: value,
            rest: null
          }

          return this
        } else {
          return traverse(values.rest)
        }
      }

      return traverse(this.values)
    },

    [Symbol.iterator]: function () {
      let index = this.values;

      return {
        next () {
          const current = index

          if (current === null) {
            return {done: true}
          } else {
            index = current.rest
              return {done: false, value: current.value}
          }
        }
      }
    }
  }
}

const list = List()

list.add(1)
list.add(2)
list.add(3)

const iter = list[Symbol.iterator]()

console.log('Iterator', iter.next())
console.log('Iterator', iter.next())
console.log('Iterator', iter.next())
console.log('Iterator', iter.next())

for(let i of list) {
  console.log('for-of', i)
}

console.log('spread operator', [...list])
