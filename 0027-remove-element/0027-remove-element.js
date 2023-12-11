/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  while (nums.indexOf(val) > -1) {
    const index = nums.indexOf(val);
    nums.splice(index, 1);
  };
  
  return nums.length;
};