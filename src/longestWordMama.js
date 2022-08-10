/*
the input will be words(i.e String )
the output it should   get the length of the longest word type of number
1)create a function
2)with a parameter

function longestWord(STR)
      SET  ALLWORD =split STR with space
      SET WORDS_LENGTH to an empty array
       for each WORD of ALLWORD 
         push the length of WORD into WORDS_LENGTH 
       endfor
        SET LENGTH_OF_LONGEST_WORD = largest number of WORDS_LENGTH
return  LENGTH_OF_LONGEST_WORD
*/

function longestWord(str) {
  const allWords = str.split(" ");
  const wordsLength = [];
  for (const word of allWords) {
    wordsLength.push(word.length);
  }
  const lengthOfLongestWord = Math.max(...wordsLength);
  return lengthOfLongestWord;
}

console.log(longestWord("nobeen and me "));

function longestWordWithMap(str) {
  const allWords = str.split(" ");

  const wordsLength = allWords.map((word) => word.length);
  const lengthOfLongestWord = Math.max(...wordsLength);
  return lengthOfLongestWord;
}
console.log(longestWordWithMap("nobeen and me coding kingkortobbobimoru"));
