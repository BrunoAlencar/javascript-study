function regexVar() {
  const re = /(^a.*a$)|(^e.*e$)|(^i.*i$)|(^o.*o$)|(^u.*u$)/gm;

  return re;
}
console.log(regexVar('abcd')); // false
console.log(regexVar('abcda')); // true
console.log(regexVar('abcdo')); // false
