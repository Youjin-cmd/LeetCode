/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
    let result = 1;

    while (result * result < x) {
        result++;
    }
    
    if (result * result == x) {
        return result;
    }
    
    return result - 1;
};