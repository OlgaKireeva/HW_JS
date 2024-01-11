/*  Task - 1
    Напишіть регулярний вираз, який допоможе знайти принаймні шість символів і не містяти літери А (великої або малої)
*/

const regex1 = /^([^Aa]{6,})$/;

const testString = "bcdefg";
const isMatch = regex1.test(testString);
console.log(isMatch);

/*  Task - 2

    var text = 'cat car can';

    Напишіть regex, котрий знайде cat та can, але не знайде car
 
*/

var text = 'cat car can';
var regex = /\b(cat|can)\b/g;
var matches = text.match(regex);
console.log(matches);

/*  Task - 3

    text = 'I would like 8 cups of coffee, please.';

    Напишіть regex, котрий знайде кількість чашок кофе.
 
*/

var text = 'I would like 8 cups of coffee, please.';
var regex = /\b\d+\s*cups?\b/g;
var matches = text.match(regex);
console.log(matches);

/*  Task - 4

    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';


    Напишіть regex, котрий знайде ВСІ слова котрі починаются на h
 
*/

var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
var regex = /\b[hH]\w*\b/g;
var matches = text.match(regex);
console.log(matches);

/*  Task - 5 (Not required)

    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';


    Напишіть regex, котрий знайде ВСІ слова від 4 до 6 символів
 
*/

var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
var regex = new RegExp('\\b\\w{4,6}\\b', 'g');
var matches = text.match(regex);
console.log(matches);

/*  Task - 6 (Not required)

    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';


    Напишіть regex, котрий знайде ВСІ слова більше ніж 5 символів
 
*/

var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
var regex = new RegExp('\\b\\w{6,}\\b', 'g');
var matches = text.match(regex);
console.log(matches);