'use strict';

let Data = new Date();
let Year = Data.getFullYear();
let Month = Data.getMonth();
let Day = Data.getDate();

let money = +prompt("Ваш бюджет на месяц?", "0");
let time = prompt("Введите дату в формате YYYY-MM-DD", Year+"-"+Month+"-"+Day);
let appData = {
    budget: money,
    timeData: time,
    expenses: 0,
    optionalExpenses: [],
    income: 0,
    savings: false
}
appData.optionalExpenses = prompt("Введите обязательную статью расходов в этом месяце", 0);
appData.optionalExpenses = appData.optionalExpenses+":"+prompt("“Во сколько обойдется?”", 0);

alert(money/30);
console.log(appData);
