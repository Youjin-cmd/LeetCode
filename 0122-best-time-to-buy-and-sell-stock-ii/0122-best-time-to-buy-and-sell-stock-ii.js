/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(days) {
    let result = 0;
    let minPrice = days[0];
    let holdingProfit = 0;

    for(let i = 1; i < days.length; i++) {
        if (days[i] <= days[i - 1]) {
          result += holdingProfit;
          holdingProfit = 0;
          minPrice = days[i]
        } else {
          holdingProfit = days[i] - minPrice;
        }
    }

    result += holdingProfit;

    return result;
};