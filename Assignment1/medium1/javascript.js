function specialReverse(str,char)
 { 
  var rev =  [];
  const splitStr = str.split(" ");
  for(var i=0;i<splitStr.length;i++){
   var temp= splitStr[i];

   if(temp[0]==char){
    var revs = temp.split("").reverse().join("");
    rev.push(revs);

   }
   
   else{
    rev.push(temp);
   }
  

  }
 // return 1;   
 rev = rev.join(' ');
 return rev;  
}

//specialReverse ("word searches are super fun", "s")
console.log(specialReverse ("word searches are super fun", "s"));
console.log(specialReverse ("first man to walk on the moon", "m"));
console.log(specialReverse ("peter piper picked pickled peppers", "p"));