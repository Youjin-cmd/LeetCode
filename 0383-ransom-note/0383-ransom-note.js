/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const magazineString = [...magazine];

  for (let i = 0; i < ransomNote.length; i++) {
    const index = magazineString.indexOf(ransomNote[i]);

    if (index > -1) {
      magazineString.splice(index, 1);
    } else {
      return false;
    }
  }
  
  return true;
};