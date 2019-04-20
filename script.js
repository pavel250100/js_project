'use strict';

/*
var leftBorderWidth = 1;
console.log(leftBorderWidth);

let person = {
    name: "Pavel",
    surname: "Ustyantsev",
    age: 25,
    isStudent: true
}

console.log(person.name, person.surname, person.age);

let arr = ["Pavel",'Igor','Askhat'];
console.log(arr[0]);

//alert("Hello World!");

//let answer = confirm("Are you here?");

let answer = prompt("Are you 18?", "Yes");
console.log(answer);
*/

var money = prompt("What is your budget for a month?", ""),
    time  = prompt("Enter the date in the format of YYYY-MM_DD"),
    answer1 = prompt("Enter the mandatory list of expenses"),
    answer2 = prompt("How much it will be?"),
    appData = {
        budget: money,
        timeData: time,
        expenses: {
            answer1 : answer2
        },
        optionalExpenses: {

        },
        income: [],
        savings: false
    }

alert(appData.budget/30);

