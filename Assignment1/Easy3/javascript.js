function replaceVowel(string) {
  var repl =  [];
  string = string.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < string.length; i++) {
      if (vowels.indexOf(string[i]) < 0) {
          repl.push(string[i])
      }
      else{
        repl.push((vowels.indexOf(string[i]))+1)
      }
  }
  repl = repl.join('');
  return repl;
}
console.log(replaceVowel('karachi'))
console.log(replaceVowel('chembur'))
console.log(replaceVowel('khandbari'))