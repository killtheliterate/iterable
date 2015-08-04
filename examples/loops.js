// iterator - from MDN
function makeIterator(array){
    return {
       next() {
           if (nextIndex < array.length) {
               return {
                   value: array[nextIndex++],
                   done: false
               }
           } else {
               return {
                   done: true
               }
           }

       }
    }
}

// iterable
var myIterable = {}

myIterable[Symbol.iterator] = function* () { // generator
    yield 1;
    yield 2;
    yield 3;
}

[...myIterable] // [1, 2, 3]
String, Array, TypedArray, Map and Set are all built-in iterables, because
the prototype objects of them all have a Symbol.iterator method.
