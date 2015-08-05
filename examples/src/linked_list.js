const List = function () {
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
    }
  }
}


function makeLinkedListIterator (list) {
  let index = list.values

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

const list = List()

list.add(1)
list.add(2)
list.add(3)

console.log(list)

const iter = makeLinkedListIterator(list)

console.log('Iterator', iter.next())
console.log('Iterator', iter.next())
console.log('Iterator', iter.next())
console.log('Iterator', iter.next())
