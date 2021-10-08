/**
 * This problem was asked by Snapchat.
 * Given an array of time intervals (start, end) for classroom lectures (possibly overlapping),
 * find the minimum number of rooms required.
 * For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.
 */

const getMinRooms = (intervals) => {
  let startTimes = [];
  let endTimes = [];

  intervals.forEach((interval) => {
    const [startTime, endTime] = interval;
    startTimes.push(startTime);
    endTimes.push(endTime);
  });

  startTimes.sort((a, b) => a - b);
  endTimes.sort((a, b) => a - b);

  let currRooms = 0,
    minRooms = 0,
    startInd = 0,
    endInd = 0;

  while (startInd < startTimes.length || endInd < endTimes.length) {
    /**
     * If start time is smaller then the end time, a new room is required
     * since the times are overlapping
     */
    if (startTimes[startInd] < endTimes[endInd]) {
      currRooms += 1;
      startInd++;
    } else {
    /**
     * If start time is equal to or greater than current time, then no new room is required
     */
      currRooms -= 1;
      endInd++;
    }
    minRooms = Math.max(minRooms, currRooms);
  }

  return minRooms;
};

console.log(
  getMinRooms([
    [30, 75],
    [0, 50],
    [60, 150],
  ])
);
