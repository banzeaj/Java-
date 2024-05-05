
// snippet 3

let friends = ["philip","abby","phelipe","simcha"];

for(let i = 0;i <friends.length;i++){

    for(let j = 0; j<friends.length; j++){
        console.log(friends[i], friends[j]);
    }
}

///////////////////////////////////////////////////////////////////////


console.log("--------------------------------------------------------------");
let locations =["flatbush","williamsburg","bushwick"];

for (let i = 0;i < locations.length; i++){
    for( let j =i + 1; j< locations.length; j++ ){

        console.log(locations[i],locations[j]);    
    
    } 

    
    ///////////////////////////////////////////////////////////////////////


console.log("--------------------------------------------------------------");

let colors = ["red","purple","orange"];

for (let i = 0; i <colors.length;i++){
    let colorStr = colors[i];
    console.log(colorStr);

    for (let j =0; j < colorStr.length;j++){

        let char = colorStr[j];
        console.log(char);
    }

}
}

///////////////////////////////////////////////////////////////////////


console.log("--------------------------------------------------------------");