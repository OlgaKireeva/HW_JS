/* Task - 1
    Створіть масив (array1) з 5 любих елементівю
    Створіть функцію, яка буде повертати другий елемент з масиву
*/

const array11 = [10, 20, 30, 40, 50];
function getSecondElement(arr) {
    if (arr.length >= 2) {
        return arr[1];
    } else {
        return "Масив має менше двох елементів";
    }
}
const secondElement = getSecondElement(array11);
console.log("Другий елемент з масиву:", secondElement);

/* Task - 2
    Створіть функцію, який додасть 1 елемент до масиву з попередньої задачи (array1) (наприклад, "new item")
*/

const array12 = [10, 20, 30, 40, 50];
function addNewItem(arr, newItem) {
    return arr.concat(newItem);
}
const newArray = addNewItem(array12, "new item");
console.log("Масив після додавання нового елемента:", newArray);

/* Task - 3
    Створіть другий масив (array2), потім створить функцію, яка отримує 2 масиви і повертає масив, що містить елементи з масивів array1 та array2
*/

const array1 = [1, 2, 3];
const array2 = ['o', 'l', 'g', 'a'];
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
const mergedArray = mergeArrays(array1, array2);
console.log("Отриманий масив:", mergedArray);

/* Task - 5 (Not required)
    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає кількість людей, чиє ім'я "John" або вік менший за 30
     не використовуйте цикли
*/

function countPeopleMatchingCondition(peopleArray) {
    const filteredPeople = peopleArray.filter(person => person.age < 30);
    return filteredPeople.length;
}
const people = [
    { name: "Taras Shevchenko", age: 47 },
    { name: "Lesya Ukrainka", age: 29 },
    { name: "Ivan Franko", age: 42 },
    { name: "Bohdan Khmelnytsky", age: 55 }
];
const result = countPeopleMatchingCondition(people);
console.log("Кількість людей, чиїй вік менше 30:", result);

/* Task - 6 (Not required)
    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає новий масив усіх людей, старших за 30 років
*/

function filterRockStarsByAge(rockStarsArray, ageThreshold) {
    const filteredRockStars = rockStarsArray.filter(star => star.age > ageThreshold);
    return filteredRockStars;
}
const rockStars = [
    { name: "Freddie Mercury", age: 45 },
    { name: "David Bowie", age: 50 },
    { name: "Jimi Hendrix", age: 27 },
    { name: "Janis Joplin", age: 27 }
];
const resultRockStars = filterRockStarsByAge(rockStars, 40);
console.log("Відомі рокові виконавці старші за 40 років:", resultRockStars);

/* Task - 8 (Not required)

    Створити функцію для знаходження індексу мінімального елементу масиву;
    наприклад,  console.log(minItem([6,8,2,9,1,3])) // 4
*/

function minItemIndex(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return -1;
    }

    let minIndex = 0;
    let minValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
            minIndex = i;
        }
    }

    return minIndex;
}
const arrayToSearch = [6, 8, 2, 9, 1, 3];
const resultIndex = minItemIndex(arrayToSearch);
console.log("Індекс мінімального елементу:", resultIndex);