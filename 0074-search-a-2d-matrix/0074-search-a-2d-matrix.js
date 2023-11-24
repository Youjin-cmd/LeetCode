/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][matrix[i].length - 1] === target) {
            return true;   
        }
        
        if (matrix[i][matrix[i].length - 1] > target) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === target) {
                    return true;   
                }
            }
        }
    }
    
    return false;
};