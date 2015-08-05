import fs from 'fs'

function things (...stuff) {

}

function* schedule (...tasks) {
  for(let task of tasks) {
    yield stream('../fixture/one.txt')
  }
}

function read(filename) {
  return function (callback) {
    fs.readFile(filename, 'utf8', callback)
  }
}

function co (generator) {
  const gen = generator()

  function nextTask (err, res) {
    var item = gen.next(res)

    if (!item.done) {
      item.value(nextItem)
    }
  }

  nextItem()
}
