/**
 * This problem was asked by Slack.
 * You are given a string formed by concatenating several words corresponding
 * to the integers zero through nine and then anagramming.
 * For example, the input could be 'niesevehrtfeev', which is an anagram of 'threefiveseven'.
 * Note that there can be multiple instances of each integer.
 * Given this string, return the original integers in sorted order. In the example above, this would be 357.
 */

const numberWords = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const getCharCount = (str) => {
  const charCount = Array.from({ length: 256 }).fill(0);

  for (letter of str) {
    charCount[letter.charCodeAt()]++;
  }

  return charCount;
};

const getWordFrequency = (strCharCount, wordCharCount, word, count) => {
  for (letter of word) {
    if (
      wordCharCount[letter.charCodeAt()] > strCharCount[letter.charCodeAt()]
    ) {
      return {
        currentStrCharCount: strCharCount,
        currentCount: count,
      };
    }
  }

  for (letter of word) {
    strCharCount[letter.charCodeAt()] -= 1;
  }

  count++;

  return getWordFrequency(strCharCount, wordCharCount, word, count);
};

const getOriginalNumber = (str) => {
  let strCharCount = getCharCount(str);
  let result = 0;

  numberWords.forEach((word, index) => {
    const wordCharCount = getCharCount(word);

    const { currentStrCharCount, currentCount } = getWordFrequency(
      strCharCount,
      wordCharCount,
      word,
      0
    );
    strCharCount = currentStrCharCount;

    let count = currentCount;

    while (count > 0) {
      result = result * 10 + index;
      count--;
    }
  });

  return result;
};

console.log(getOriginalNumber("enieniennon"));
