// snippet 1

let flim = function () {

    console.log("leak ");
    flam();
    console.log("geek");

};

let flam = function () {

    console.log("beak");
    console.log("sneak");

} ;

flim();
console.log("---------------------------------------------");

//////////////////////////////////////////////////////////////////
//snippet 2

let alice = function(n) {

    for (let i = 0 ;i <= n;i++){
        bob(i);
    }
};

let bob = function (n){
  
    if (n % 2 ===0){
        console.log("good ");
    } else {
        console.log("bad");
    };

};

alice(4);

console.log("---------------------------------");

/////////////////////////////////////////////////////////////////
//snippet 3

let foo = function (){

    for (let i =0;i <5;i++){
        console.log(" i = "+1);
        bar();
    };
};

let bar = function (){
for (let j =0;j<5;j++){

    console.log("j = "+j);
}

};
foo();

console.log("-------------------------------------")
/////////////////////////////////////////////////////////////

//snippet 4

const doubleVowel  = function(str){

    let newStr = ' ';
    let vowels = 'aeiou';

    for (let i = 0;i < str.length;i++){
        let char = str[i];
        if(vowels.includes(char)){
            newStr += char + char;
        } 
        else {newStr += char}; 
    }
    return newStr;
}

console.log(doubleVowel("runner"));
console.log(doubleVowel("stoplight"));
console.log(doubleVowel("gardener"));