/**
 * Write a program that checks whether an integer is a palindrome.
 * For example, 121 is a palindrome, as well as 888. 678 is not a palindrome.
 * Do not convert the integer into a string.
 */

/**
 * Solution Approach - Find length of the number through Maths formula
 */

const isPalindrome = (value) => {
  let absValue = Math.abs(value);

  /**
   * If single digit number is always a palindrome
   */
  if (absValue >= 0 && absValue < 10) {
    return true;
  }

  /**
   * If multiple of 10 then not a palindrome
   */

  if (absValue % 10 === 0) {
    return false;
  }

  /**
   * Formula to find length of the number without converting it to a string
   */
  const n = Math.ceil(Math.log10(value + 1));

  let revValue = 0;
  let copyValue = absValue;

  for (let power = n - 1; power >= 0; power--) {
    revValue += (copyValue % 10) * Math.pow(10, power);
    copyValue = Math.floor(copyValue / 10);
  }

  return revValue === absValue;
};

console.log(isPalindrome(1211));
