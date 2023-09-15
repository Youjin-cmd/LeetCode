/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str = x.toString();
    var rev　=　str.split("").reverse().join("");
  
    if(rev == str){
        return true
    }
    return false      
}
  