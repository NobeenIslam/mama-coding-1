"use strict";
/* [12,18,31,19]

function findBiggestNumber
 inputParameters - listOfNumbers (array of numbers)
    returnParameter - number
1 13 25 -5

look at first number
make that biggest number

get second number
if that number is bigger than the first number make that the biggest number
if it isn't do nothing

function findBiggestNumber(LIST_OF_NUMBERS)
    set BIGGEST_NUMbER_SO_FAR = first number in list

    for each NUMBER in LIST_OF_NUMBERS
        if (NUMBER is greater than BIGGEST_NUMBER_SO FAR)
            set BIGGEST_NUMBER_SO_FAR = NUMBER
        else 
            do nothing
        endif
    endfor

return BIGGEST_NUMBER_SO_FAR

*/

function findBiggestNumber(listOfNumbers) {
  let biggestNumberSoFar = listOfNumbers[0];

  for (const number of listOfNumbers) {
    console.log(number, typeof number);
    if (typeof number === "string") {
      console.log("This is a string, please ignore");
      break;
    } else if (number > biggestNumberSoFar) {
      biggestNumberSoFar = number;
      console.log("New biggest number is", biggestNumberSoFar);
    }
  }

  return biggestNumberSoFar;
}

// console.log(findBiggestNumber([1,4,3,6,7]),"should be",7)
// console.log(findBiggestNumber([5.5,13,25,-5]),"should be",25)
console.log(findBiggestNumber([1, 13, "25", -5]), "should be", 13);
// console.log(findBiggestNumber([0,0,0,0]),"should be",0)
