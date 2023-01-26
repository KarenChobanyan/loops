
"use strict"


for( let a = 0; a<= 10 ; a++){
    let line = "";
  for( let b = 10 - a ; b < 10 ; b++){
    line += " * "
  }
  console.log(line)}

 
  
  for ( let a = 0 ; a <=10; a++){
    let line = ""
    for ( let b = 0;  b < 10;b++){
      line += " "
      if (b >= 10-a){
        line  += " *"
      }
     else{ line += "  "}
    }
    console.log(line)
  }
         
                  console.log("\n")
   
  for(let a = 0; a <= 10; a++ ){
    let line = "" ; 
    for( let b = a + 1; b <= 10; b++){
        line += "  *"
    }line+="\n"
    console.log(line)}
  

for(let i = 0; i <= 10 ; i ++){
  let line = ""
    for( let j = 0; j <= 10 ; j ++){
     
     if( j < i + 1){
        line += "  ";
     }
       else{ line += " *";}
    line += " "
}console.log(line)
}

for ( let a = 0 ; a <=10; a++){
  let line = ""
  for ( let b = 0;  b < 10;b++){
    if (b >= 10-a){
      line += "  "
      line  += " *"
    }
   else{ line += "  "}
  }
  console.log(line)
}
  console.log("\n")
for ( let i = 0; i<= 10 ; i++){
  let str = ""
  for ( let j = 0 ; j< 5 ; j++)
    if(j >3 - i && i <3){
    str += " *  "
  }
 else if ( j >= 6 - i && i>=3 && i < 6){
  str += " *  "
 }
 else if (j >= 8 - i && i >= 6 && i <9 ){
  str += " *  "
 }
 else{ str+= "  "}
 console.log(str)
  }
  
