function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var x = 0; x < musicians.length; x++) {
    array.push(`${musicians[x]} plays ${instruments[x]}`)
  }
  return array
}

function johnLennonFacts(array) {
  for (x = 0; x < array.length; x++) {
    array[x] = array[x] + "!!!"
  }
  return array
}

function iLoveTheBeatles(number) {
  array = []
  do {
    number++
    array.push("I love the Beatles!")
  } while (number < 15)
  return array
}
