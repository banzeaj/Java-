let qty = 38;

    if (qty > 30 && qty % 5 === 4) {   
    console.log("swish");
    } else
    {
    console.log("swoosh");}// ans

   ////////////////////////////////////////////////////////////

   if (qty > 0) {console.log("pos"); }

   ////////////////////////////////////////////////////////////

   let a = "celery";
   let b = "SQUASH";
   
    if (a === a.toUpperCase()) {
      console.log("alpha"); }
   
    if (b === b.toUpperCase()) {
      console.log("beta");
    }

    //////////////////////////////////////////////////////////////////

    let number = 9;

        if (number < 4) {
            console.log("ding"); }
            else
            if (number % 3 === 0) 
            {
            console.log("dong"); } 

 ///////////////////////////////////////////////////
        
      let nonsense = "blog trust fund tattooed williamsburg poke roof party";
      let hasOk = nonsense.indexOf("ok") > -1;

        if (hasOk) {
           console.log("yeet");
         } else
         if (nonsense.length > 10) {
           console.log("yo");
         } else
          {console.log("no") }

/////////////////////////////////////////////////////////////////////////////////

let hasZoo = nonsense.indexOf("zoo") > -1;
let hasFun = nonsense.indexOf("fun") > -1;

 if (hasZoo && hasOk) {
   console.log("cool");
 } else if (hasOk) {
   console.log("rad");
 } else if (hasFun) {
  console.log("dope");
 } else {
   console.log("nope");}

////////////////////////////////////////////////////////////////////////////////////

let q = 25;
if (q % 3 === 0 && q % 5 === 0) {
  console.log("both");
} else if (q % 3 === 0 || q % 5 == 0) {
  console.log("either");
}else if(false){
  console.log("no data")
}

else {
  console.log("neither");
}

///////////////////////////////////////////////////////////////////

let r = 9;
if (r % 3 === 0 && r % 5 === 0) {
  console.log("both");
} else if (r % 3 === 0 || r % 5 == 0) {
  console.log("either");
} else {
  console.log("neither");
}

////////////////////////////////////////////////////////////////////
let s = 15;
if (s % 3 === 0 && s % 5 === 0) {
  console.log("both");
} else if (s % 3 === 0 || s % 5 == 0) {
  console.log("either");
} else {
  console.log("neither");
}
/////////////////////////////////////////////////////////////////////

let sentence = "roger that";

if (sentence[sentence.length - 1] === "t") {
  console.log("ends in t");
} else {
  console.log("does not end in t");
}

if (sentence.length <= 4) {
  console.log("short");
} else {
  console.log("long");
}

