/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

function show(a) {
  a.forEach((item) => {
    console.log(item);
  });
}
function vowelsAndConsonants(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  s = s.split('');
  const arrayVowels = s.filter(vowel => vowels.indexOf(vowel) !== -1);
  const arrayConsonant = s.filter(vowel => vowels.indexOf(vowel) === -1);
  show(arrayVowels);
  show(arrayConsonant);
}

vowelsAndConsonants('javascriptloops');
