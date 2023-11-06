console.log('number' + 3 + 3)  //конкатенація - бачить усе як строку, тому просто склеює усі значення; = number33
console.log(null + 3) //null=false=0; 0+3=3
console.log(5 && "qwerty") // зупиниться на першому false; = qwerty
console.log(+'40' + +'2' + "hillel") // =42hillel; конкатенація
console.log('10' - 5 === 6) // поверне false, бо === це строга рівність а так як 10-5!=6, то false
console.log(true + false) // 1+0=1
console.log('4px' - 3) // = NaN, 4px то строка, а 3 цифра
console.log('4' - 3) //=1, віднімання цифр
console.log('6' + 3 ** 0) // спочатку ступінь 3 в степень 0=1б далі 6 - як строка та + 1 = 61
console.log(12 / '6') // ділення цифр =2
console.log('10' + (5 === 6)) //10+(false)=10false  - хоча здавалось, що 10+0=10
console.log(null == '') // null and '' = false
console.log(3 ** (9 / 3)) // спочатку дужки 9/3 , а потім 3 возводимо у ступінь 3 = 27
console.log(!!'false' == !!'true') //дві стрінгі, не булеве значення
//!!"false" стає false в булевому значенні
// !!"True"  теж стає false в булевому значенні і при порівнянні вони рівні, що і дає результат = true
console.log(0 || '0' && 1)
 // в першу чергу оператор AND, повертає true, якщо обидва операнди є true, інакше повертає false- зупинився на першому false
console.log((+null == false) < 1) // +null =+0 а false=0, рівність не справдилась, тому результат = false
console.log(false && true || true) // спочатку and = true, потім OR - і там все ок; true || true = true
console.log(false && (false || true)) // спочатку оператор and, зламалось на false, потім OR - false|| true = false
console.log((+null == false) < 1 ** 5) //Порівнює два значення на рівність (за значенням) тому +0 та 0 одразу false бо !=0