/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function(nums) {
    return nums.sort(function(a, b) {
        return (b + "" + a ) - (a + "" + b);
    }).join("").replace(/^0*/,"") || "0";
};