// //single line comment
// /* multi line comment */

// //Javascript - programmming language- dynamic behaviour on website/apps - works with HTMl and CSS
// // declare variables, conditions, arrays, loops, functions, objects, scope, 

// console.log("Hello World!"); 

// let date_ofBirth = 1990; // variable declaration
// // variables - let, const, var

// //var favColor - redeclare, reassign
// var favColor = "blue";
// var favColor = "green"; // redeclaration
// console.log(favColor); // green

// // let - doesn't allow redeclaration, allows reassignment
// let favFood = "pizza";
// favFood = "burger"; // reassignment
// console.log(favFood);

// //const- doesn't allow redeclaration, doesn't allow reassignment
// const pie = 3.14;


// //scope
// //1. Global scope - are variables declared outside any function or block
// let firstName = "Jazz"; // global scope

// //function scope - variables declared inside a function
// function studentName(){
//     let surName = 'Kaur';// local scope
//     console.log(firstName); // accessible
//     console.log(surName); // accessible
//     return surName;
// }
// studentName()

// if (firstName === "Jazz"){
//     console.log("This is Jazz" ); // accessible
// }


// //block scope
// //{ } anything inside these curly braces is block scope
// if (firstName == "Jazz");{
//     let secondName = "Singh"; // block scope
//    console.log(secondName); // accessible
// }
// //console.log(secondName); // not accessible - error 

// // var let const
// // var - global scope

// function witalumni(){
//     let age = 12;
//     for(let i = 0; i < 4 ; i++){
//         let luckyNumber = age + 4;
//         var unluckyNumber = age - 4; 
//     }
//     console.log(unluckyNumber); // accessible
// }      
// witalumni();
// //console.log(unluckyNumber); // not accessible - error


// //data types
// // primitive data types - string, number, boolean, null, undefined, symbol, bigint
// // non-primitive data types - object, array, function

// // let age = "Jazz"
// // age = 4
// // console.log(typeof age); // number

// //Assignment operator 
// let color = 'red'
// let favNumber = 7
// favNumber += 3 // favNumber = favNumber + 3
// console.log(favNumber); // 10

// //== will check only value

// // === will check value and data type - strict

// let goals = "4"
// if (goals == 4){
//     console.log("We won")
// }else{
//     console.log("We lost")
// }

// let goal = undefined 
// if (goal== "undefined"){ 
//     console.log("We won") 
// }else{ 
//     console.log("We lost") 
// }

// let goalss = true 
// if (goalss == "true"){ 
//     console.log("We won") 
// }else{ 
//     console.log("We lost")
// }

// //Template literals - backticks ``
// //console.log('The goal for the year is ${goals}');

// //Conditionals and ternary operator
// //if/else if/else
//     // if (expression){
//     //     do this
//     // }else if (next expression){
//     //     do this
//     // }else {
//     //     if everything is false
//     //}   

//     // class grade A = 80-100, B = 79-70, C = 69-60, D = 59-50, E = 49-40, F = 39
//     //using conditionals print the grade of a partuclar student

// const score = 80;
// if (score >= 80 && score <= 100){
//     console.log("Grade A");
// }
// else if (score >= 70 && score <= 79){
//     console.log("Grade B");
// }
// else if (score >= 60 && score <= 69){
//     console.log("Grade C");
// }
// else if (score >= 50 && score <= 59){
//     console.log("Grade D");
// }
// else if (score >= 40 && score <= 49){
//     console.log("Grade E");
// }
// else if (score <= 39){
//     console.log("Grade F");
// }
// else{
//     console.log("Invalid score");
// }

// //Ternary operator
// //condition ? do this if true : do this if false
// let canDrive = false
// canDrive === true ?console.log("You can drive") : console.log("You cannot drive");

// //condition ? firststatement : secondcondition ? second statement : else statement

// //Arrays 
// const studentArray = ["Thaisa", "Jazz", "Tham", 1, true, null];
// console.log(studentArray[0]); // Jazz

// //console.log(studentArray[studentArray.length-1]);

// //studentArray[-1] = "fatemeh"
// //studentArray[8] = "Lina"
// console.log(typeof studentArray);
// console.log(studentArray);

// //delete studentArray[-1]; removes object
// //delete studentArray[3];
// //Splice and slice

// //Splice - add, remove, replace items in an array
// //Array.splice(startIndex, numberOfItemsToRemove, replacement items)
// studentArray.splice(1, 2);
// console.log(studentArray);

// studentArray.splice(2, 1, "femi");
// console.log(studentArray);

// //slice - extract a portion of an array
// //Array.slice(startIndex, endIndex)

// //console.log(studentArray.slice(2))
// //console.log(studentArray.slice(0, 2));
// console.log(studentArray.slice(-3,-1));

// /// Function - resuable code

// //traditional function or standard function
// function functName(arg1, arg2){
//   return 
// }
// functName()

// //Function expression 
// const functName2 = function(arg){
//     return
// }

// //arrow function
// const functname3 = () =>{
//     return
// }

// //Hoisting - Javascript behaviour where the declaration of an element move to the top
// // console.log(favCountry)
// // let favCountry = "Canada"
// console.log(greetings());

// function greetings(){
//     return "Hello Canada"
// }

// console.log(greeting2())
// const greeting2 = function(){
//     return "Hello Canada"
// }

// console.log(greeting3());
// const greeting3 = () =>{
//     return "Hello Canada"



//Write a function take 2 arrays one is wit_alumni, the other is wit_current_student
//return a ne w array of unique names

function uniqueNames(wit_alumni, wit_current_student) {
  const unique_students = [];

  for (let i = 0; i < wit_alumni.length; i++) {
    const name = wit_alumni[i];
    let found = false;

    for (let j = 0; j < wit_current_student.length; j++) {
      if (name === wit_current_student[j]) {
        found = true;
        break;
      }
    }

    if (!found && !unique_students.includes(name)) {
      unique_students.push(name);
    }
  }

  return unique_students;
}








// let studentid = {
//     studentName: "femi",
//     saymyName: function(){
//         return "Student name is" + this.studentName

//     }
// }
// console.log(studentid.saymyName())


//objects
const student ={
  name: "Femi",
  isMarried: false,
  "zip code": 1234

  subject{
  "first subject": "English",
   otherSubject: "Science"
  }
introduction: () => {
  return 'hello this dtudent is ${this.name}'
}