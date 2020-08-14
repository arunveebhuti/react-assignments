

  function removeDups(array){
    var arr= [];
    
   
    for(i=0; i < array.length; i++){
        if(arr.indexOf(array[i]) === -1) {
            arr.push(array[i]);
        }
    }
    return arr;
}
console.log(removeDups ([1, 0, 1, 0]));
console.log(removeDups (["The", "big", "cat"]) );
console.log(removeDups (["John", "Taylor", "John"]));



