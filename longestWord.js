"use strict"

// Given a string s consisting of words and spaces, return the length of the longest word in the string.
// A word is a maximal substring consisting of non-space characters only.

/*
function getLengthLongestWord
input - string 
output - number
*/

/*
function getLengthOfLongestWord(STRING)
    set WORD_LENGTHS = empty array
    for each WORD of STRING
        set LENGTH_OF_WORD = length of the word
        append LENGTH_OF_WORD into WORD_LENGTHS
    endfor

    set LONGEST_WORD_LENGTH = getBiggestNumber(WORD_LENGTH)

return LONGEST_WORD_LENGTH

function getBiggestNumber(array)

return number
*/
function getLengthOfLongestWord(string){
    const wordLengths = []
    const words = string.split(" ")

    for (const word of words){
        wordLengths.push(word.length)
    }
    
    const longestWordLength = Math.max(...wordLengths)
    return longestWordLength
}

console.log(getLengthOfLongestWord("Hello mama"),"should be", 5)
console.log(getLengthOfLongestWord("The fox went to the shops"),"should be", 5)
console.log(getLengthOfLongestWord("aaa bbbb ccc"),"should be", 4)


/* Notes
Go through spread operator
Go through map function 
*/
