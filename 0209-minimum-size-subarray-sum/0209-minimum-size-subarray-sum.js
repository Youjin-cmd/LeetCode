/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let minLength = Infinity;
    let prevIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        while (sum >= target) {
            minLength = Math.min(minLength, i - prevIndex + 1);
            sum -= nums[prevIndex];
            prevIndex++;
        }
    }
    
    if (minLength === Infinity) {
      return 0;
    } else {
      return minLength;
    }
};

// brute force 해답

// var minSubArrayLen = function(target, nums) {
//   let result = 1;
//   let window = 1;
//   let maximum = nums.length
  
//   while (window !== nums.length + 1) {
//     for (let i = 0; i < maximum; i++) {
//       const subarray = nums.slice(i, i + window);
      
//       const sum = subarray.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue
//       }, 0);

//       if (sum >= target) {
//           return result;
//       }
//     }
    
//     window++;
//     result++;
//     maximum--;
//   }
  
//   return 0;
// };