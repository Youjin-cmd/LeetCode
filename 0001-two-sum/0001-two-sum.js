/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const result = [0, 0];

    for (let i = 0; i < nums.length; i++) {
        result[0] = i;

        for (let j = 1 + i; j < nums.length; j++) {
            result[1] = j;

            if (nums[result[0]] + nums[result[1]] === target) {
                return result;
            }
        }
    }
};