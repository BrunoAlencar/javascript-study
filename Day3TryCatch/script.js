// function reverseString(s) {
//   try {
//     s = s
//       .split('')
//       .reverse()
//       .join('');
//   } catch (error) {
//     console.log(error.message);
//   }
//   console.log(s);
// }

// reverseString('abc');

// let btnValue = 0;
// document.querySelector('#btn').addEventListener('click', (e) => {
//   btnValue += 1;
//   e.target.innerHTML = btnValue;
// });

// function factorial(n) {
//   let i = n - 1;
//   while (i !== 1) {
//     n *= i;
//     i -= 1;
//   }
//   return n;
// }
// console.log(factorial(4));

// function getGrade(score) {
//   let grade;
//   // Write your code here
//   if (score <= 30 && score > 25) grade = 'A';
//   if (score <= 25 && score > 20) grade = 'B';
//   if (score <= 20 && score > 15) grade = 'C';
//   if (score <= 15 && score > 10) grade = 'D';
//   if (score <= 10 && score > 5) grade = 'E';
//   if (score <= 5 && score >= 0) grade = 'F';
//   return grade;
// }
// console.log(getGrade(11));

// function sockMerchant(n, ar) {
//   let pairs = 0;
//   const pairChecked = [];
//   ar.forEach((sock, index, arr) => {
//     const resultFilter = arr.filter(item => item === sock);
//     if (resultFilter.length > 1 && pairChecked.indexOf(sock) === -1) {
//       pairs += Math.floor(resultFilter.length / 2);
//       pairChecked.push(sock);
//     }
//   });
//   return pairs;
// }

// const arrayEx = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// console.log(sockMerchant(arrayEx.length, arrayEx));

// function countingValleys(n, s) {
//   let result = 0;
//   let numberOfValley = 0;
//   s.split('').forEach((item) => {
//     if (item === 'U') {
//       result += 1;
//       if (result === 0) {
//         numberOfValley += 1;
//       }
//     } else {
//       result -= 1;
//     }
//   });
//   return numberOfValley;
// }

// console.log(countingValleys(8, 'UUDDDUDUU'));

function jumpingOnClouds(c) {
  let jumps = 0;
  for (let index = 0; index < c.length; index += 1) {
    const cloud = c[index];

    if (cloud === 0) {
      if (c[index + 2] === 0) {
        jumps += 1;
        index += 1;
      } else if (c[index + 1] === 0) {
        jumps += 1;
      }
    }
  }
  return jumps;
}
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0, 0, 1, 0]));

// if (
//   cloud === 0
//   && (c[index - 1] === 0 || c[index - 2] === 0)
//   && !(c[index - 1] === 0 && c[index - 2] === 0)
// ) {
//   jumps += 1;
//   console.log(jumps, index);
// }
