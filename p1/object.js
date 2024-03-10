// Create a function `elementQuantities` that accepts an object as an argument. The object contains
// elements as keys and quantities as values. The function should return an array containing the elements
// appearing with the correct quantities. See the examples.

const elementQuantities = function(obj){
  let arr = [];
  for(let key in obj){
     let val = obj[key]; // 3
     for(let i = 1; i <= val; i++){
      arr.push(key)
     }

  }

  return arr;
}

let quantities1 = { cat: 3, bird: 1, dog: 2 };
console.log(elementQuantities(quantities1)); // ['cat', 'cat', 'cat', 'bird, 'dog', 'dog']

let quantities2 = { blue: 3, brown: 1 };
console.log(elementQuantities(quantities2)); // ['blue', 'blue', 'blue', 'brown']

//////////////////////////////////////////////////////////////////////////////////
console.log("-----------------------------------------------------------------")

// Create a function `emailParse` that accepts an email address string as an argument. The function
// should return an object containing `username` and `domain` as keys. See the examples.
// You can assume that the argument will be a valid email address.

const emailParse = function(str){
  let arr = str.split("@"); // ["coolcoder42", "goodmail.com"]
  return {username:arr[0], domain:arr[1]}
}

console.log(emailParse("coolcoder42@goodmail.com"));
// { username: 'coolcoder42', domain: 'goodmail.com' }

console.log(emailParse("az@woohoomail.com"));
// { username: 'az', domain: 'woohoomail.com' }

console.log(emailParse("1337pr0graMmer@coldmail.edu"));
// { username: '1337pr0graMmer', domain: 'coldmail.edu' }

///////////////////////////////////////////////////////////////////////////////////
console.log("--------------------------------------------------------------------");

// Write a function `keyPair(obj1, obj2, key)` that accepts two objects and a key string as arguments.
// The function should return an array containing the values of the given key in `obj1` and `obj2`.
// See the examples.

let keyPair = function(obj1, obj2, key){
  return [obj1[key], obj2[key]]
  }
  
  let cat1 = { name: "jinkee", breed: "calico" };
  let cat2 = { name: "garfield", breed: "red tabby" };
  console.log(keyPair(cat1, cat2, "breed")); // [ 'calico', 'red tabby' ]
  console.log(keyPair(cat1, cat2, "name")); // [ 'jinkee', 'garfield ]
  
  let sport1 = { name: "volleyball", team: true };
  let sport2 = { name: "golf", team: false };
  console.log(keyPair(sport1, sport2, "team")); // [ true, false ]

  /////////////////////////////////////////////////////////////////////////////
  console.log("-----------------------------------------------------------");