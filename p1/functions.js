let qty = 38;

if (qty > 30 && qty % 5 === 4) {   
    console.log("swish");
 } else
  {
   console.log("swoosh");}
///////////////////////////////////////////////////////////////

// Write a function `endsWithT` that accepts a string as an argument. The function should return a
// boolean indicating whether or not the string ends with the character 't'.

let endsWithT = function(str) {
    let lastChar = str[str.length-1];
    if(lastChar === "t") {
        return true;
    }else {
        return false;
    }
}


console.log(endsWithT("smart")); // true
console.log(endsWithT("racket")); // true
console.log(endsWithT("taco")); // false
console.log(endsWithT("boomerang")); // false

/////////////////////////////////////////////////////////////

// Write a function `isDivBy4` that accepts a number as an argument. The function should return a
// boolean indicating whether or not the number is divisible by 4.

// let isDivBy4 = function (num) {
// return num % 4 === 0;
// }

let isDivBy4 = function (num) {

    if(num % 4 === 0) {
        return true;
    }else {
        return false;
    }
    }


console.log(isDivBy4(8)); // true
console.log(isDivBy4(12)); // true
console.log(isDivBy4(24)); // true
console.log(isDivBy4(9)); // false
console.log(isDivBy4(10)); // false

//////////////////////////////////////////////////////////////////////
// Write a function `keepItQuiet` that accepts a string as an argument. The function should return the
// lowercase version of the string with 3 periods added to the end of it.

let keepItQuiet = function(str) {
    let lowercase = str.toLowerCase();
    return lowercase + "..."
}

console.log(keepItQuiet("HOORAY")); // 'hooray...'
console.log(keepItQuiet("Doggo")); // 'doggo...'
console.log(keepItQuiet("WHAT?!?!")); // 'what?!?!...'

/////////////////////////////////////////////////////////////////////////

// Write a function `endsInLy` that accepts a string as an argument and returns a boolean indicating
// whether or not the string ends in the substring 'ly'.

let endsInLy = function(str) {
    let secondLastChar = str[str.length - 2]
let lastChar = str[str.length - 1]
let result = secondLastChar+lastChar

if(result === "ly") {
    return true;
}else {
    return false;
}

}


console.log(endsInLy("pretty")); // false
console.log(endsInLy("instant")); // false
console.log(endsInLy("analytic")); // false
console.log(endsInLy("timidly")); // true
console.log(endsInLy("fly")); // true
console.log(endsInLy("gallantly")); // true
///////////////////////////////////////////////////////////////

// Write a function `funnySound` that accepts two strings as arguments. The function should return a
// new string containing the first three characters of both strings concatenated together.

// You can assume that the arguments are both at least three characters long.

let funnySound = function(str1, str2){
    let firstValue = str1.slice(0, 3);
    let secondValue = str2.slice(0, 3);

    return firstValue + secondValue;
}


console.log(funnySound("tiger", "spoon")); // 'tigspo'
console.log(funnySound("computer", "phone")); // 'compho'
console.log(funnySound("skate", "bottle")); // 'skabot'
console.log(funnySound("frog", "ashtray")); // 'froash'

//////////////////////////////////////////////////////////////////////////

let oneOrNone = function(b1, b2) {
    if(b1 && b2) {
        return false;
    } else if(b1 === false && b2 === false) {
        return false;
    }else {
        return true;
    }
}


console.log(oneOrNone(false, false)); // false
console.log(oneOrNone(true, false)); // true
console.log(oneOrNone(false, true)); // true
console.log(oneOrNone(true, true)); // false