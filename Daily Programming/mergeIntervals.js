/**
 * Given a list of possibly overlapping intervals, 
 * return a new list of intervals where all overlapping intervals have been merged.
 * The input list is not necessarily ordered in any way.
 * For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].
 */

const getMergedIntervals = (intervals)=>{
    /**
     * Sort intervals on the basis of their starting time
     */
    intervals.sort((interval1,interval2)=>interval1[0]-interval2[0]);
    
    let currInterval = intervals[0];
    let mergedIntervals =[currInterval];


    for(let i =1;i<intervals.length;i++){
        const [startTime,endTime] = intervals[i];
        const [currStartTime,currEndTime] = currInterval;

        if(startTime <= currEndTime){
            currInterval = [currStartTime,Math.max(currEndTime,endTime)];
            mergedIntervals.pop();
        }
        else{
            currInterval = intervals[i];
        }

        mergedIntervals.push(currInterval); 
    }

    return mergedIntervals;
}

console.log(getMergedIntervals([[1,4],[4,5]]));