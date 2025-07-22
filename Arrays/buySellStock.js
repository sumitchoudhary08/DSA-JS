const buySellStock = (prices) => {
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }

    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return maxProfit;
};

const arr = [7, 8, 5, 3, 9, 2];
const result = buySellStock(arr);

console.log(result);
