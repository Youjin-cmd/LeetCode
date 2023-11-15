/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let left = 0; left < nums.length - 2; left++) {
        if (left > 0 && nums[left] === nums[left - 1]) {
            continue;
        }

        let mid = left + 1;
        let right = nums.length - 1;

        while (mid < right) {
            const sum = nums[left] + nums[mid] + nums[right];

            if (sum === 0) {
                result.push([nums[left], nums[mid], nums[right]]);
                while (nums[mid] === nums[mid + 1]) {
                    mid++;
                }
                while (nums[right] === nums[right - 1]) {
                    right--;
                }
                mid++;
                right--;
            } else if (sum < 0) {
                mid++;
            } else {
                right--;
            }
        }
    }

    return result;
};