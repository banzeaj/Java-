
let global =100;

function outer(){

    let a = 10;
    function inner(){

        console.log(a); // inner function forms a closure over 'a'
        console.log(global);
    }
    return inner;

}


let closureFunc =outer();
closureFunc();

console.log("-------------------------------------------")