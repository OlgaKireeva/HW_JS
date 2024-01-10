/*Task - 1
  Replace the "for" loop with a "while" loop

for (let i = 0; i < 8; i++) {
  console.log( `число - ` + i);
}
*/
let i = -1;

while (++i < 8) {
    console.log(`число - ${i}`);
}

/*Task - 2
  Implement algorithm which will calculate sum of numbers from 0 to 50 (included) not divisible by 3.
  Use 3 different cycles: for | while | do..while */

  //for
let sumFor = 0;
for (let i = 0; i <= 50; i++) {
    if (i % 3 !== 0) {
        sumFor += i;
    }
}
console.log("Sum using for:", sumFor);

// while
let sumWhile = 0;
let j = 0;
while (j <= 50) {
    if (j % 3 !== 0) {
        sumWhile += j;
    }
    j++;
}
console.log("Sum using while:", sumWhile);

//do..while
let sumDoWhile = 0;
let k = 0;
do {
    if (k % 3 !== 0) {
        sumDoWhile += k;
    }
    k++;
} while (k <= 50);
console.log("Sum using do..while:", sumDoWhile);


/* Task - 3
  Implement algorithm which will
  calculate sum of numbers from firstNumber to secondNumber (included)
  Use for loop  
*/

let firstNumber = -100;
let secondNumber = 250;

let sum = 0;

for (let i = firstNumber; i <= secondNumber; i++) {
    sum += i;
}

console.log("Sum of numbers from", firstNumber, "to", secondNumber, "is:", sum);

/* Task - 4
  Make a timer that will count from 10 to 0

  For example,
  10 seconds left
  9 seconds left
  8 seconds left 
*/
for (let seconds = 10; seconds >= 0; seconds--) {
    console.log(`${seconds} seconds left`);
}
console.log("Time's up!");

/* Task - 5
  Create program to display the following sequence: 7 14 21 28 35 42 49 */

  for (let i = 7; i <= 49; i += 7) {
    console.log(i);
}

/* Task - 6 (Not required)
  implement algorithm which calculates factorial for 
  using for, while, do..while operators
  assign the result to corresponding variable
  what is factorial: https://www.mathsisfun.com/numbers/factorial.html 
*/
let number = 8; 

let factorialDoWhile = 1;
let g = 1;

do {
    factorialDoWhile *= g;
    g++;
} while (g <= number);

console.log(`Factorial: ${factorialDoWhile}`);

