

  function realType (temp){
  
    return Object.prototype.toString.call(temp);
}
console.log(realType (1));
console.log(realType ("a"));
console.log(realType (true));
console.log(realType([]));
console.log(realType(null));





