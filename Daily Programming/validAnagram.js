/**
 * This problem was asked by Pivotal.
 * A step word is formed by taking a given word, adding a letter, and anagramming the result.
 * For example, starting with the word "APPLE", you can add an "A" and anagram to get "APPEAL".
 * Given a dictionary of words and an input word, create a function that returns all valid step words.
 */

const getValidAnagrams = (dictionary, input) => {
  /**
   * Array to maintain count of all 256 characters
   */
  let count = Array.from({ length: 256 + 1 }).fill(0);
  [...input].forEach((letter) => {
    /**
     * Store count at ASCII number
     */
    count[letter.charCodeAt()] += 1;
  });

  let inputLength = input.length;

  const validAnagrams = dictionary.filter((word) => {
    /**
     * If length of the word + extra letter used and input does not match, it is not a step word
     */
    if (word.length !== inputLength + 1) {
      return false;
    }

    let countCopy = count;
    let hasExtraLetter = false;

    [...word].forEach((letter) => {
      /**
       *  If letter was not present in the input word and an extra letter has already been used
       *  then it is not a step word
       */
      if (countCopy[letter.charCodeAt()] === 0 && hasExtraLetter) {
        return false;
      } else if (countCopy[letter.charCodeAt()] === 0 && !hasExtraLetter) {
        hasExtraLetter = true;
      }

      countCopy[letter.charCodeAt()] -= 1;
    });

    /**
     * If all letters were present in the word and no extra letter is used then it is not a step word
     */
    return hasExtraLetter;
  });

  return validAnagrams;
};

console.log(getValidAnagrams(["APPEAL","APPLE"], "APPLE"));
