//задание 1

function calcSum(){
const num1 = Number(prompt("Ведите первое число:"));
const num2 = Number(prompt("Введите второе число:"));

 const sum = num1 + num2;

    alert("Сумма у нас:" + sum);

if 
    (num1 > num2){
    alert("Большее число :" + num1);
}
else if
    (num1 === num2){
    alert("Числа одинаковые");
}
else{
alert("большее число:" + num2);
}
}

calcSum()

// Задание 2

function getUserName(){
    const userName = prompt("Представтесь пожалуйста");
    const userAge = Number(prompt("Сколько вам лет?"));

    if
    (userAge >= 30){
        alert("Здравствуйте" + userName);
    }
    else
    {alert("Привет " + userName)}
}

getUserName()

// Задание 3


let num1 = Number(prompt("Введите число"));
let num2 = Number(prompt("Введите степень"));

function Exponentiation() {
    if(!num2){
        num2 = 2;
    }

    const Math = num1 ** num2;
 
    alert(num1 + " в степени " + num2 + " состовляет " + Math);
}

Exponentiation();