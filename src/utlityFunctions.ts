/*
function splitNumber(INPUT_NUMBER)
    set INPUT_AS_STRING = convert INPUT_NUMER to a string
    //given 324 --> "324"
    set DIGITS_AS_STRING = split each character of INPUT_AS_STRING
    // given "324"--> ["3","2","4"]
    set DIGITS_AS_NUMBERS = all the elements of DIGITS_AS_STRING back to numbers
    // given ["3","2","4"] ---> [3,2,4]
return

*/

export function splitDigitsIntoAnArray(inputNumber: number): number[] {
  const inputAsString = inputNumber.toString();
  const digitsAsString = inputAsString.split("");
  const digitsAsNumbers = digitsAsString.map((stringNumber) =>
    parseInt(stringNumber)
  );
  return digitsAsNumbers;
}

export function addNumbers(input: number): number {
  return 4;
}

//console.log(splitDigitsIntoAnArray(324),"Should be", [3,2,4])
