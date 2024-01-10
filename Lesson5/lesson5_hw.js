/* Task - 1 
Створіть об'єкт "Людина" з щонайменше трьома властивостями (рік, ім'я, прізвище). 

Завдання:
- Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
- Напишіть метод getFullName(), який виводитиме повне ім'я. 
*/

const person = {
    year: 1988,
    firstName: 'Olga',
    lastName: 'Test',
    getInfo: function() {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
    },
    getFullName: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
};
person.getInfo();
person.getFullName();

/* Task - 2 (Not required)
   Створіть функцію createRobot, яка створить об'єкт "robot" з об'єкта "person", 
   додавши додаткову властивість до об'єкта "person". 
   "Robot" повинен мати властивість "batteryEnergy" (наприклад, batteryEnergy = 50)

 * ПРИМІТКА: використовуйте метод присвоєння об'єктів (Object.assign)
*/

function createRobot() {
    const person = {
        year: 1988,
        firstName: 'Olha',
        lastName: 'Kireeva',
        getInfo() {
            for (const key in this) {
                if (typeof this[key] !== 'function') {
                    console.log(`${key}: ${this[key]}`);
                }
            }
        },
        getFullName() {
            console.log(`${this.firstName} ${this.lastName}`);
        }
    };

    const robot = Object.assign({}, person, { batteryEnergy: 70 });
    
    return robot;
}
const robot = createRobot();
console.log(robot);


/* Task - 3 
   Створіть isARobot, який буде перевіряти, чи є об'єкт роботом
   перевіркою наявності у об'єкта властивості (batteryEnergy)
*/

function isARobot(obj) {
    return obj.hasOwnProperty('batteryEnergy');
}

const personn = {
    year: 1993,
    firstName: 'Kate',
    lastName: 'Poliandr',
};

const robott = {
    year: 2022,
    model: 'XYZ',
    batteryEnergy: 75,
};

console.log(isARobot(personn));
console.log(isARobot(robott));

/* Task - 4 (Not required)

Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:

var services = {
	"стрижка": "60",
	"гоління": "80",
	"Миття голови": "100"
};

Завдання:
- створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
- створити метод minPrice() - який повертає мінімальний price
- створити метод maxPrice() - який повертає максимальний price
*/

var services = {
    "стрижка": "60",
    "гоління": "80",
    "Миття голови": "100",
    price() {
        return Object.values(this).filter(value => typeof value === 'string').reduce((total, current) => total + parseInt(current), 0);
    },
    minPrice() {
        return Math.min(...Object.values(this).filter(value => typeof value === 'string').map(value => parseInt(value)));
    },
    maxPrice() {
        return Math.max(...Object.values(this).filter(value => typeof value === 'string').map(value => parseInt(value)));
    }
};
console.log("Загальна вартість послуг:", services.price());
console.log("Мінімальна вартість послуг:", services.minPrice());
console.log("Максимальна вартість послуг:", services.maxPrice());
