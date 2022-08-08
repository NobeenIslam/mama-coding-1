const nums = [1,2,3,4,5]

function multiplyByFive(number){
    return number*5
}

const multiplyBySix = (number)=>{
    return number*6
}
const multiplyBySeven = number=> number*7
const multiplyByEight = number => number*8
const multiply = (number1,number2) => number1*number2

console.log(multiplyBySeven(5))
//const modifiedNums = nums.map(number=>multiplyByFive(number))
//const modifiedNums = nums.map(multiplyByFive(number))
//console.log(modifiedNums)

function modifyStringtwo(string1,string2){
    const test = string1+"hellow"
    const test2 = string2+"random"
    return test+test2
}

const modifyString = (string1,string2)=>{
    const test = string1+"hellow"
    const test2 = string2+"random"
    return test+test2
}

const modifyStringThree = string1 =>string1+"helloe"+"random"


console.log(modifyStringThree("one"))

const myName = "Nobeen"

console.log(`My name is ${myName}`)