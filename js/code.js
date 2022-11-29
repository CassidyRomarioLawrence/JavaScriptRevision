// ===Square root===
// console.log("sqrt():", Math.sqrt(36));

// created array
let data = [6, 7, 50, "Cassidy", 74, 10, "peter", 50];
// console.log(data)
// Find length of array
// let newData = data.length;
// console.log(newData);
// console.log("at(): ", data.at(-1));

// return Middle Element
let middleIndex = Math.trunc((data.length - 1) / 2);

// console.log("middle element: ", middleIndex);
// console.log("middle element: ", data[middleIndex]);

// Middle Index for Even Array
// console.log("middle element: ", data.slice(middleIndex, middleIndex + 2));

// if (data.length % 2 == 0) {
//     console.log("middle element: ", data.slice(middleIndex, middleIndex + 2));
// }
// else {
//     console.log(data[middleIndex]);
// }

// Only display numbers
// let a = data.filter(item => typeof item == 'number')
// console.log(a)

// ===String Method===
// let sentence = "I love programming";
// console.log(sentence);
// Split
// console.log(sentence.split(' '));

// ===date===
// let date = new Date();
// console.log("My date: ", date);

// ===if statement===
// let age = 17;

// if (age > 17){
//     console.log("You are qualified");
// }
// else {
//     console.log("You are not qualified");
// }

// ===Nested if statement===
// let age = 11;
// let salary = 5000;

// if (age > 17) {
//     if (salary >= 5000) {
//         console.log("yesyah");
//     }
//     else {
//         console.log("present second payslip");
//     }
// }
// else {
//     console.log("you are not qualified");
// }

// ===Use Logical Operators===
// if ((age > 17) || (salary >= 5000)) {
//     console.log("well done");
// }
// else {
//     console.log("Thank you, for coming");
// }

// ===Switch Statement===

// let monthInt = 1;
// switch (monthInt) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
// }

// ===Switch with Boolean===
let grade = -5;
switch (true) {
    case grade == 100:
        console.log("You're awesome");
        break;
    case (grade >= 90) && (grade <= 99):
        console.log("Well done");
        break;
    case (grade >= 75) && (grade <= 89):
        console.log("Distinction");
        break;
    case (grade >= 50) && (grade <= 75):
        console.log("Pass");
        break;
    case (grade <= 49) && (Math.sign(grade) !=-1):
        console.log("Fail");
        break;
    default:
        console.log("Out of rage");
}