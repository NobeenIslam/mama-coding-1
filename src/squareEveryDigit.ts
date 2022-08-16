import { splitDigitsIntoAnArray, addNumbers } from "./utlityFunctions";
import myfunction, { testFunctionTwo } from "./testingImports";

/*
function squareEveryDigit
input: number
output: number


function squareEveryDigit(INPUT)
    set INDIVIDUAL_DIGITS = splitTheNumbers(INPUT) 
    //split all the numbers of the input we've been given and store in array
    // given 324 ---> [3,2,4]
    set SQUARED_DIGITS = squareAllElements(INDIVIDUAL_DIGITS)
    //given [3,2,4] --> [9,4,16]
    set RESULT = fuseAllNumbers(SQUARED_DIGITS)
    //given [9,4,16] --> 9416
return RESULT
*/

function squareEveryDigit(input: number): any {
  const individualDigits = splitDigitsIntoAnArray(input);
  return individualDigits;
}

console.log(squareEveryDigit(324), "should be", 9416);
console.log(squareEveryDigit(9119), "should be", 811181);
