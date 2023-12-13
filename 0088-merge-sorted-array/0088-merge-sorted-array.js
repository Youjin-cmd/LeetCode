/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  let emptySlot = nums1.length - m;
  let pointer = nums1.length - emptySlot - 1;
  
  for (let i = 0; i < nums2.length ; i++) {
    pointer = nums1.length - emptySlot - 1;

    while (pointer >= 0) {
      if (nums1[pointer] <= nums2[i]) {
        break;
      }
      
      pointer--;
    }
    
    nums1.splice(pointer + 1, 0, nums2[i]);
    nums1.pop();
    emptySlot--;
  }
};