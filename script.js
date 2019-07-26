'use strict';

let money, time;

function start() {
    
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money)  || money == "" || typeof(money) == null) {
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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    chooseOptExpenses: function() {
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
    
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: "+ appData.monthIncome);
            }
    },
    chooseIncome: function() {
        let items = "";
        while (typeof(items) != 'string' || typeof(items) == null || items == "" || typeof items != 'string' ) {
            items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую)', '');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
        appData.income.forEach(function(item, i, mass) {
            console.log("Способы доп. заработка: " + (i+1).toFixed() + ". " + item);
        });
    }
}

console.log("Наша программа включает в себя данные:");
for (let key in appData) {
    console.log('Свойство ' + key + ' имет значение ' + appData[key]);
}