/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let leftPointer = 0;
    let rightPointer = height.length - 1;
    let result = 0;
    
    function helper(left, right) {
        const gap = Math.abs(left - right);
        
        if (height[left] >= height[right]) {
            if (result < gap * height[right]) {
                result = gap * height[right];
            }

            rightPointer--;
        }

        if (height[left] < height[right]) {
            if (result < gap * height[left]) {
                result = gap * height[left];
            }

            leftPointer++;
        }
    }
    
    while(leftPointer !== rightPointer) {
        helper(leftPointer, rightPointer);
    }

    return result;
};