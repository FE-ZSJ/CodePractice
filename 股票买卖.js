/*
 * zhusujuan - 2021-04-03
 * 【买卖股票的最佳时机】
 *
 *  给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 *  计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）
 *  你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 
 * @param {number[]} prices
 * @return {number}
 */
var prices = [7, 1, 5, 6, 3, 4]
var maxProfit = function (prices) {
    let buy = false; // 是否买入
    let cur = 0; // 当前持有股票
    let sum_profit = 0; // 盈利

    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i + 1]) {
            if (!buy) {
                cur = prices[i]
                buy = true
            }
        } else {
            if (buy) {
                sum_profit += (prices[i] - cur);
                cur = 0;
                buy = false
            }
        }
    }
    if (buy) {
        sum_profit += prices[prices.length - 1] - cur;
    }
    return sum_profit
};
const profit = maxProfit(prices);
console.log(profit);

