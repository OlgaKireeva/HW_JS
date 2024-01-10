/* Task - 1 (Not required)
    Написати свою реалізацію функції isNaN. 
    
    Нагадування: це глобальна функція в JavaScript, яка використовується для перевірки, чи є значення NaN (Not-a-Number). 
*/

const myIsNaN = value => value !== value;
console.log(myIsNaN(NaN));
console.log(myIsNaN(123));
console.log(myIsNaN("Hello"));

/* Task - 2
    Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні 
    від 100 до 1000 включно. Порахувати кількість парних та непарних серед них. 
    Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). 
    Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

    Функція виводить інформацію
    Кількість згенерованих чисел: кількість чисел
    Парних чисел: кількість парних чисел
    Не парних чисел: кількість не парних чисел
    Відсоток парних до не парних
*/

function checkProbabilityTheory(count) {
    const generatedNumbers = Array.from({ length: count }, () => Math.floor(Math.random() * (1001 - 100) + 100));

    const evenNumbers = generatedNumbers.filter(number => number % 2 === 0);
    const oddNumbers = generatedNumbers.filter(number => number % 2 !== 0);

    const evenCount = evenNumbers.length;
    const oddCount = oddNumbers.length;

    const evenPercentage = (evenCount / count) * 100;
    const oddPercentage = (oddCount / count) * 100;

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Не парних чисел: ${oddCount}`);
    console.log(`Відсоток парних до не парних: ${evenPercentage.toFixed(2)}% : ${oddPercentage.toFixed(2)}%`);
}

// Приклад 
checkProbabilityTheory(1000);

/* Task - 3
    Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true), яка приймає чотири аргументи:

    рядок, до якого буде додаватися символ.
    символ, який буде додаватися.
    Скільки додавати символів
    булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
    Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте знаачення 6, то додаєте тільки один символ
*/
function pad(str, char, count, addToStart) {
    if (typeof str !== 'string' || typeof char !== 'string' || typeof count !== 'number' || typeof addToStart !== 'boolean') {
        console.error('Invalid input types');
        return str;
    }

    const padLength = Math.max(count - str.length, 0);
    const padding = char.repeat(padLength);

    return addToStart ? padding + str : str + padding;
}
const result = pad('qwerty', '+', 6, true);
console.log(result);
