/* Task - 0
    Create a function task1Func which will always return true
*/

function task1Func() {
    return true;
}
console.log(task1Func()); 


/* Task 1
    Write a function min(a, b) that returns the lesser of two numbers a and b.

    For example,
    min(2, 5) == 2
    min(3, -1) == -1
    min(1, 1) == 1
*/

function min(a, b) {
    return Math.min(a, b);
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));   


/* Task 2
    Write a function pow(x, n) that returns the number x raised to the power of n. 
    In other words, it multiplies the number x by itself n times and returns the result.

    For example,
    pow(3, 2) = 3 * 3 = 9
    pow(3, 3) = 3 * 3 * 3 = 27
    pow(1, 100) = 1 * 1 * ...* 1 = 1
*/

function pow(x, n) {
    return x ** n;
}
console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));

/* Task 3
    Remake a function from the task 2
    * just make second parameter to have a default value equal 5

*/

function pow(x, n = 5) {
    return x ** n;
}
console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));

/* Task 4
   Create a variable  which will return a function
    which will take parameter pet as a number (where 1 stands for pizza, 2 is spagetti and 0 is other)
    and returns text ee.g. "My lunch for today is pizza"
    Use function expression with arrow function notation
*/
 
const lunchSelector = pet => {
    return (pet === 1) ? "My lunch for today is pizza" :
           (pet === 2) ? "My lunch for today is spaghetti" :
                         "My lunch for today is something else";
};
console.log(lunchSelector(1));
console.log(lunchSelector(2));
console.log(lunchSelector(0));
