const hasPairWithSum = (arr, sum) => {
  let compSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (compSet.has(arr[i])) {
      return true;
    }
    compSet.add(sum - arr[i]);
  }

  return false;
};

console.log(hasPairWithSum([1, 2, 4, 4], 8));
