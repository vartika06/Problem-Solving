/**
 * Given a Roman numeral, the task is to find its corresponding integer value.
 */

/**
 * Solution approach: If current value of symbol is greater than or equal to the value of next symbol,
 * then add this value to the running total.
 * Else subtract this value by adding the value of next symbol to the running total.
 */

const romanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const getNumberFromRoman = (roman) => {
  let sum = 0;

  for (let i = 0; i < roman.length; i++) {
    if (romanMap[roman[i]] < romanMap[roman[i + 1]]) {
      sum += romanMap[roman[i + 1]] - romanMap[roman[i]];
      i++;
      continue;
    }

    sum += romanMap[roman[i]];
  }

  return sum;
};

console.log(getNumberFromRoman("CCCLXXIV"));
