/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
        
        index++;
    }

    return index;
};