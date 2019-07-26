'use strict';

let money, time;

function start() {
    
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money)  || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
}

function chooseExpenses() {
    for (let i = 0; i < 2; ) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        
            if ( (typeof(a))==='string' && (typeof(a)) != 'null' && (typeof(b)) != 'null'
                && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
                i++;
            } else {
                // alert("Вы ввели неверные данные! Повторите попытку.");
            }
        };
}

chooseExpenses();
// let i=0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     b = prompt("Во сколько обойдется?", '');

//     if ( (typeof(a))==='string' && (typeof(a)) != 'null' && (typeof(b)) != 'null'
//         && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//         i++;
//     } else {
//         alert("Вы ввели неверные данные! Повторите попытку.");
//     }
    
// }

// let i=0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     b = prompt("Во сколько обойдется?", '');

//     if ( (typeof(a))==='string' && (typeof(a)) != 'null' && (typeof(b)) != 'null'
//         && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//         i++;
//     } else {
//         alert("Вы ввели неверные данные! Повторите попытку.");
//     }
    
// } while(i <2)

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

function chooseOptExpenses() {
    for (let i = 0; i < 3; ) {
        let b = prompt("Во сколько обойдется?", '');
            if ( (typeof(b)) != 'null' && b != '') {
                console.log("done");
                appData.optionalExpenses[i+1] = b;
                i++;
            } else {
                // alert("Вы ввели неверные данные! Повторите попытку.");
            }
        };

}

chooseOptExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: "+ appData.monthIncome);
        }
}

checkSavings();