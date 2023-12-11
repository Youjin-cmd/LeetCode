/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    const map = {};

    for (let i = 0; i < strs.length; i++) {
      const stringInArray = [...strs[i]];
  
      stringInArray.sort();
      
      const joinedString = stringInArray.join("");
      
      if (map[joinedString]) {
        map[joinedString].push(strs[i]);
      } else {
        map[joinedString] = [strs[i]];
      }
    }

    return Object.values(map);
};