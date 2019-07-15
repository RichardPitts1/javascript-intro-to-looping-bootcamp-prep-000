function forLoop(array) {
  for (var i = 0; i < 25; i++) {
  array.push("I am " + `${i}` + " strange loop" + `${i === 1 ? '' : 's'}` + ".")
}
return array
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
 return "done"
}

function doWhileLoop(num) {
  var x = num;
  function incrementer() {
    for (var i = 0; i < x; i++)
    return i
  }
  do { console.log("I run once regardless") }
  while (incrementer() < num)
}