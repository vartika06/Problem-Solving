/**
 * This problem was asked by Bloomberg.
 * There are N prisoners standing in a circle, waiting to be executed.
 * The executions are carried out starting with the kth person,
 * and removing every successive kth person going clockwise until there is no one left.
 *
 * Given N and k, write an algorithm to determine where a prisoner should stand in order to be the last survivor.
 * For example, if N = 5 and k = 2, the order of executions would be [2, 4, 1, 5, 3], so you should return 3.
 */

const getLastSurvivor = (N, k) => {
  const prisoners = Array.from({ length: N }, (v, k) => k + 1);
  let executedPrisoners = 0,
    count = 0,
    i = 0;

  /**
   * If N-1 prisoners are executed then return the last remaining prisoner
   */
  for (
    i = 0;
    !(executedPrisoners + 1 == prisoners.length && prisoners[i % N] > 0);
    i++
  ) {
    /**
     * If prisoner is not dead, consider him
     */
    if (prisoners[i % N] !== 0) {
      count++;
    }

    /**
     * Execute if the current prisoner qualifies
     */
    if (count === k) {
      executedPrisoners++;
      count = 0;
      prisoners[i % N] = 0;
    }
  }

  return prisoners[i % N];
};

console.log(getLastSurvivor(5, 2));
