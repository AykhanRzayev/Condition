// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log("5! =", factorial(5));

//-----------
// function sumOfOdds(start, end) {
//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//         if (i % 2 !== 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }

// console.log("10 and 30 range of sums ", sumOfOdds(10, 30));

//------------

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function isPowerOfTwo(n) {
//     return n > 0 && (n & (n - 1)) === 0;
// }

// rl.question("Bir ədəd daxil edin: ", (input) => {
//     let n = parseInt(input);
//     if (isPowerOfTwo(n)) {
//         console.log(n + " 2-nin qüvvətidir.");
//     } else {
//         console.log(n + " 2-nin qüvvəti deyil.");
//     }
//     rl.close();
// });
