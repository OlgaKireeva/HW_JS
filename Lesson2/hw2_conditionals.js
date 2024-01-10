var catsWeight = "str";
if (catsWeight <= 5){
console.log ("The cat is small and still needs to be fed");
} else if (catsWeight > 5){
    console.log ("The cat is very fluffy and needs to be combed")
} else {
    console.log ("It`s not a cat,silly:)") // додала від себе:)
}

/* Task - 2
Write an if condition to check if the age value is NOT between 18 and 50 inclusive, if it is not, then hire */
var age = '19';
if (age <=18 || age >=50){
console.log ("Not hire");
} else {
         console.log("Hire")
}

/* Task - 3
Write a program for checking grades.
If the grade is A and B, the student has passed the exam
If C and D - we send them for a retake
If E - expulsion. */

let grade = "123"; 

switch (grade) {
    case "A":
    case "B":
        console.log("The student has passed the exam.");
        break;
    case "C":
    case "D":
        console.log("You need retake an exam.");
        break;
    case "E":
        console.log("Expulsion.");
        break;
    default:
        console.log("Invalid grade.");
}

 /* Task - 5
Rewrite the if statement using the conditional operator '?

if (height < 140) {
  console.log("Заборонено на атракціон");
} else {
    console.log("Проходьте, будь ласка!");
}
 */

const heigh = 150;

const messagee = (heigh < 140) ? "Заборонено на атракціон" : "Проходьте, будь ласка!";
console.log(messagee);

/* Task - 6 

Rewrite if..else using several ternary operators '? 

if (height < 50) 
{
     console.log("Forbidden to use attraction"); 
    } else if (height >= 50 && height < 80) {
         console.log("Permit - attraction №1");
         } else if (height >= 80 && height < 120) {
             console.log("Permit - attraction №1 or №2"); 
            } else { 
                console.log("Permit - All"); }
*/
const height = 90; 

const message = (height < 50) 
  ? "Forbidden to use attraction"
  : (height >= 50 && height < 80)
    ? "Permit - attraction №1"
    : (height >= 80 && height < 120)
      ? "Permit - attraction №1 or №2"
      : "Permit - All";

console.log(message);

/* Task - 7
 Create a program that will print the day of the week according to the day number. */

const dayNumber = 3; 

let dayOfWeek;

switch (dayNumber) {
    case 1:
        dayOfWeek = "Monday";
        break;
    case 2:
        dayOfWeek = "Tuesday";
        break;
    case 3:
        dayOfWeek = "Wednesday";
        break;
    case 4:
        dayOfWeek = "Thursday";
        break;
    case 5:
        dayOfWeek = "Friday";
        break;
    case 6:
        dayOfWeek = "Saturday";
        break;
    case 7:
        dayOfWeek = "Sunday";
        break;
    default:
        dayOfWeek = "Invalid day number";
}

console.log(`The day of the week for day number ${dayNumber} is ${dayOfWeek}.`);

