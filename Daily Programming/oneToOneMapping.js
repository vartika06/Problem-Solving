/**
 * This problem was asked by Bloomberg.
 * Determine whether there exists a one-to-one character mapping from one string s1 to another s2.
 * For example, given s1 = abc and s2 = bcd, return true since we can map a to b, b to c, and c to d.
 * Given s1 = foo and s2 = bar, return false since the o cannot map to two characters.
 */

/**
 * Solution approach assumes both strings will always be of equal length and non-empty
 */

const hasOneToOneMapping = (str1, str2) => {
  let mapping = Array.from({ length: 256 }).fill(0);

  for (let i = 0; i < str1.length; i++) {
    if (mapping[str1[i].charCodeAt()] === 0) {
      mapping[str1[i].charCodeAt()] = str2[i];
    } else {
      if (mapping[str1[i].charCodeAt()] !== str2[i]) {
        return false;
      }
    }
  }

  return true;
};

console.log(hasOneToOneMapping("foo", "bar"));
