import './Array/isEmpty.min.js';

//contoh
const obj = document.createElement("span")
const array = []
const array1 = ['',1, 2, 3, 4, 5,'','','','','',obj]
console.log(Array.isEmpty(array));// true
console.log(Array.isEmpty(array1));// false 