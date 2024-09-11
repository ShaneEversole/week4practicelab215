//Task1
//  let number = prompt("Please enter a number:");
//  let percent = parseInt(prompt("Please enter a percentage:"))
//  let percentAmt = parseInt(number * percent / 100);
//   let refToQuantity = document.querySelector(".quantity")
//   refToQuantity.innerText = "Quantity: " + number;
//   refToQuantity.innerText = percent + " % of " + number + " = " + percentAmt;
//   console.log(number)

//task 2
//  let points = parseInt(prompt("Enter a grade between 1-100:"));
//  let refToTask2 = document.querySelector(".task2");
//  points = parseInt(points);
//  let displayStr = "";
//  //(a)
//  let ifStr = "";
//  if (points >= 90){
//     ifStr = "A"
//  }
//  else if(points >= 80){
//     ifStr = "B"
//  }
//  else if (points >= 70){
//     ifStr = "C"
//  }
//  else if (points >= 60){
//     ifStr = "D"
//  }
//  else ifStr = "F ";

//  refToTask2.innerText = "Grade is: "  + " (a) " + ifStr;

//  //b
//  let switchStr = "";
//  switch(true){
//     case points >= 90:
//     switchStr = "switch : A";
//     break;
//     case points >= 80:
//         switchStr = "switch : B";
//         break;
//         case points >= 90:
//     switchStr = "switch : A";
//     break;
//     case points >= 70:
//         switchStr = "switch : C";
//         break;
//         case points >= 60:
//             switchStr = "switch : D";
//             break;
//     default:
//         switchStr = "F";
//  }
//  refToTask2.innerHTML = " (b) " + switchStr;
 
//Task3 
// let prof = prompt("Enter Professors name: ");
// let punish = prompt("Enter the line you have to write: ");
// let num = parseInt(prompt("Enter the number of lines to write: "));
// for (let line = 1; line <= num; line++){
//     console.log(line + " " + punish )
// }

//Task4
// let prof = prompt("Enter Professors name: ");
// let punish = prompt("Enter the line you have to write: ");
// let num = parseInt(prompt("Enter the number of lines to write: "));
// let line = 1;
// while(line <= num){
// let ProfName = document.querySelector(".profname");
// ProfName.innerHTML = `${prof}`;
// let Task4 = document.querySelector(".task4");
// Task4.innerHTML += `${line} ${punish} <br>`
// line++
// }

//Task5
// let prof = prompt("Enter Professors name: ");
// let punish = prompt("Enter the line you have to write: ");
// let num = parseInt(prompt("Enter the number of lines to write: "));
// numberOfline = parseInt(line);
// const lineWriter = (line) => {
//     let task5_str = "<br>"
//     for (let line = 1; line <= numberOfline; line++){
//         task5_str += `${line} ${punish}<br>`
//     }
// }

//Task6
//strategy 1, nested loop times table
// let firstFactor = 1;
// let secondFactor = 1;
// let displayStr = "";
// for(firstFactor = 1; firstFactor <=12; firstFactor++){
//     for(secondFactor = 1; secondFactor <=12; secondFactor++){
//         let product = firstFactor * secondFactor;
//         displayStr += `${firstFactor} X ${secondFactor} = ${product}<br>`;
//     }
//     displayStr += "<br>-------------<br>"

// }
// let Task6 = document.querySelector(".task6");
// Task6.innerHTML = displayStr;

//strategy 2
// const timesTables = (firstFactor) => {
//     let displayStr = "";
//     for (let secondFactor = 1; secondFactor <= 12; secondFactor++) {
//         let product = firstFactor * secondFactor;
//         displayStr += `${firstFactor} X ${secondFactor} = ${product}<br>`;
//     }
//     displayStr += "<br>-------------<br>";
//     return displayStr;
// };
// let fullDisplayStr = ""; 
// for (let firstFactor = 1; firstFactor <= 12; firstFactor++) {
//     fullDisplayStr += timesTables(firstFactor);
// }
// let Task6 = document.querySelector(".task6");
// Task6.innerHTML = fullDisplayStr;

//strategy 3
// const createTables = (factor, delimiter) => {
//     let displayStr = ""; 
//     for (let i = 1; i <= delimiter; i++) {
//         let product = factor * i;
//         displayStr += `${factor} x ${i} = ${product}<br>`; 
//     }
//     displayStr += "<br>-------------<br>"; 
//     return displayStr; 
// };
// const allTables = (delimiter) => {
//     let fullDisplayStr = ""; 
//     for (let factor = 1; factor <= 12; factor++) {
//         fullDisplayStr += createTables(factor, delimiter);
//     }
// //     let Task6 = document.querySelector(".task6");
// //     Task6.innerHTML = fullDisplayStr;
// };
// allTables(10);
//Function declarations in JavaScript are hoisted, enabling you to make function calls even before it is declared within the code.
//Variables declared with var are hoisted, but only their declarations, not assignments. The variable is hoisted to the top of that scope

//Task 7
// hoistedFunction();
// function hoistedFunction() {
//     console.log("This function is hoisted!");
// }
// var hoistedVar = "This variable is hoisted!";
// console.log(hoistedVar);
