/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let targetArray = t;

  for (let i = 0; i < s.length; i++) {
    const foundIndex = targetArray.indexOf(s[i]);
    
    if (foundIndex === -1) {
        return false;
    }
    
    targetArray = targetArray.slice(foundIndex + 1);
  }
  
  return true;
};