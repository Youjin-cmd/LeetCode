/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let maxNum = 0;
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] >= prices[i + 1]) {
      continue;
    }
    
    if (maxNum && maxNum - prices[i] < max) {
      continue;
    }

    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > maxNum) {
          maxNum = prices[j];
      }

      if (prices[i] > prices[j]) {
          continue;
      }
      
      if (prices[j] - prices[i] > max) {
          max = prices[j] - prices[i];
      }
    }
  }

  return max;
};