function reverseString(s) {
  try {
    s = s
      .split('')
      .reverse()
      .join('');
  } catch (error) {
    console.log(error.message);
  }
  console.log(s);
}

reverseString('abc');

let btnValue = 0;
document.querySelector('#btn').addEventListener('click', (e) => {
  btnValue += 1;
  e.target.innerHTML = btnValue;
});

function factorial(n) {
  let i = n - 1;
  while (i !== 1) {
    n *= i;
    i -= 1;
  }
  return n;
}
console.log(factorial(4));

function getGrade(score) {
  let grade;
  // Write your code here
  if (score <= 30 && score > 25) grade = 'A';
  if (score <= 25 && score > 20) grade = 'B';
  if (score <= 20 && score > 15) grade = 'C';
  if (score <= 15 && score > 10) grade = 'D';
  if (score <= 10 && score > 5) grade = 'E';
  if (score <= 5 && score >= 0) grade = 'F';
  return grade;
}
console.log(getGrade(11));
