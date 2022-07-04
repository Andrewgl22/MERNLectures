// ES5
 
// string
var myVariable = "string";
// number
var myNum = 4;
// boolean
var myBool = false;

// function definition
function myFunction(){

}

// ES6
// let and const solve hoisting issues

let myString = "string"
const myNum2 = 10
// myNum2 = 13

let myArr = [10,20,50,"string",false]

const [numberOne,,, numberTwo] = myArr

myArr.slice()

myArr.pop()
myArr.push()

myArr.shift()
myArr.unshift()


console.log("first array item: " + numberOne)
console.log("second array item: " + numberTwo)

let myObj = {
    firstName:"Andrew",
    lastName:"Lederman",
    age:31
}

// Destructuring

console.log(myObj["firstName"])

const {firstName} = myObj
console.log(firstName)
// console.log(lastName)

// console.log(myNum2)

// ES6 arrow functions

let localScope = "in the function"

const myArrowFunction = (firstName) => {
    // Ternary Operator
    console.log("first name: " + firstName)
    console.log("local scope from inside function:" + localScope)
    firstName == "Andrew" ? console.log("Andrew") : console.log("Not Andrew")
    
}

myArrowFunction("Bobby");


console.log("localscope from global: " + localScope)




