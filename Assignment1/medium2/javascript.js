
const testJackpot =  
                    arr => arr.every( v => v === arr[0] ); 


console.log(testJackpot (["@", "@", "@", "@"]) );
console.log(testJackpot (["abc", "abc", "abc", "abc"]));
console.log(testJackpot (["SS", "SS", "SS", "SS"]));
console.log(testJackpot (["&&", "&", "&&&", "&&&&"]));
console.log(testJackpot (["SS", "SS", "SS", "Ss"]));