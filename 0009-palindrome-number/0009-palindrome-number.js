/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    const str = x.toString();
    const reversedStr　=　str.split("").reverse().join("");
  
    if (reversedStr === str) {
        return true;
    }

    return false;   
}
  