// Write a function `removeDupes` that accepts an array as an argument. The function should return a
// new array where each element only appears once.

const removeDupes = function(arr){
    let newArr = [];
    for(let i =0; i<arr.length; i++){
        let element = arr[i]
        if(!newArr.includes(element)){
            newArr.push(element)
        }
    }

    return newArr;
}

console.log(removeDupes(["x", "y", "y", "x", "z"])); // ['x', 'y', 'z']
console.log(removeDupes([false, false, true, false])); // [false, true]
console.log(removeDupes([42, 5, 7, 42, 7, 3, 7, 7])); // [42, 5, 7, 3]

//////////////////////////////////////////////////////////////////////////

console.log("--------------------------------------------------------------")

// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.
const removeFirstVowel = function(str){
    let vowels = 'aeiou';
    for(let i =0; i < str.length; i++){
        let char = str[i] // v

        if(vowels.includes(char)){
            let first = str.slice(0, i)
            let second = str.slice(i+1)

            return first+second;
        }
    }
}
console.log(removeFirstVowel("volcano")); // 'vlcano'
console.log(removeFirstVowel("celery")); // 'clery'
console.log(removeFirstVowel("juice")); // 'jice'

//////////////////////////////////////////////////////////////////////////
console.log("----------------------------------------------------------")

// Write a function `removeVowels` that accepts a string as an argument. The function should return
// a version of the string where all vowels are removed.
const removeVowels = function(str){
    let newStr = '';
    let vowels = 'aeiou';
    for(let i =0; i <str.length; i++){
        let char = str[i]
        if(!vowels.includes(char)){
            newStr += char;
        }
    }

    return newStr;
}

console.log(removeVowels("jello")); // jll
console.log(removeVowels("sensitivity")); // snstvty
console.log(removeVowels("cellar door")); // cllr dr

///////////////////////////////////////////////////////////////////////

console.log("--------------------------------------------------------------")

// Write a function `shortenLongWords` that accepts a sentence string as an argument. The function
// should return the same sentence where words longer than 4 characters have their vowels removed.

const shortenLongWords = function(str){
    let newArr = [];
    let arr = str.split(' ')
   for(let i = 0; i <arr.length; i++){
    let word = arr[i]
    if(word.length > 4) {
        let newWord = RemoveVowels(word);
        newArr.push(newWord);
    }else {
        newArr.push(word);
    }
   }
   return newArr.join(' ');
}

const RemoveVowels = function(str){
    let newStr = '';
    let vowels = 'aeiou';
    for(let i =0; i <str.length; i++){
        let char = str[i]
        if(!vowels.includes(char)){
            newStr += char;
        }
    }

    return newStr;
}

console.log(shortenLongWords("they are very noble people")); // 'they are very nbl ppl'
console.log(shortenLongWords("stick with it")); // 'stck with it'
console.log(shortenLongWords("ballerina, you must have seen her")); // 'bllrna, you must have seen her'

////////////////////////////////////////////////////////////////////////

console.log("---------------------------------------------------------")

// Write a function `spam` that accepts a 2D array as an argument. The array contains pairs as elements.
// The first element of every pair is a number and the second element is a word. The function should
// return a string containing the words repeated the specified number of times. See the examples.

let spam = function(arr){
    let spamArr = [];
    for(let i =0; i<arr.length;i++){
        let innerArr = arr[i] //  ["hi", 3],
        for(let j = 0; j < innerArr[1]; j++){
            spamArr.push(innerArr[0])
        }
    }

    return spamArr.join(' ')
}
let array1 = [
    ["hi", 3],
    ["bye", 2],
  ];
  console.log(spam(array1)); // 'hi hi hi bye bye'
  
  let array2 = [
    ["cat", 1],
    ["dog", 2],
    ["bird", 4],
  ];
  console.log(spam(array2)); // 'cat dog dog bird bird bird bird'