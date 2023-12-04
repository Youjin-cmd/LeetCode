/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = function(ratings) {
  const candies = [];
  let result = 0;

  for (let i = 0; i < ratings.length; i++) {
    candies.push(1);

    if (ratings[i] > ratings[i - 1]) {
        candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 1; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      if (candies[i] <= candies[i + 1]) {
          candies[i] = candies[i + 1] + 1;
      }
    }
  }
  
  for (value of candies) {
    result += value;
  }
  
  return result;
};