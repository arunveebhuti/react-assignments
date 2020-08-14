
   function numInStr(arr) { 
  
    
    var empty=[];
for(var i=0;i<arr.length;i++){
var str= arr[i];
var m = str.match(/(\d+)/);

    if (m) { 
       empty.push(str);
    } 
}
return empty;
   }
console.log(numInStr (["1a", "a", "2b", "b"]));
console.log(numInStr (["abc", "abc10"]) );
console.log(numInStr (["abc", "ab10c", "a10bc", "bcd"]) );
console.log(numInStr (["this is a test", "test1"]));






