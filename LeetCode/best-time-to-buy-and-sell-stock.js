/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let buy = prices[0];
  prices[0] = 0;
  let profit = 0;
  for (let index = 1; index < prices.length; index++) {
    if (buy > prices[index]) {
      buy = prices[index]
      prices[index] = 0
    } else {
      profit = Math.max(prices[index] - buy, profit)
    }
  }

  return profit
}