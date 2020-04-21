console.log("arrrays")

// write a function that takes an array and an index and prints out the value of that index
// i.e for array [coold, dude] and index 0, i would get cool

var array = ["cool", "dude"]

const word = (arr, i) => {
  return arr[i];
}

console.log(word(array, 1))
// write a function that takes an array of something and tells you the name "luna" is in the array

var arr = ["trevor", "luna"]

const name = (index) => {
 return arr
}

console.log(array.some(name))

// const isLuna = (arr) => {
//   arr.includes('Luna')
// }

// console.log(isLuna(['one', 2, 'Luna', 'four']))
