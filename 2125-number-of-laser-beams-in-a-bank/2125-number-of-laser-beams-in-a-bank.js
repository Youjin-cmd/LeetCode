/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
  let result = 0;
  let temp;

  for (let i = 0; i < bank.length; i++) {
    const numOfLaser = bank[i].split("").filter(el => el === "1").length;
    
    if (numOfLaser === 0) {
      continue;
    }

    if (temp) {
      result += temp * numOfLaser;
    }

    temp = numOfLaser;
  }
  
  return result;
};