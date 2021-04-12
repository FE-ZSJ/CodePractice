/*
 * zhusujuan - 2021-04-11
 * 【旋转数组】
 *
 *  给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let l = k % nums.length
    while (l > 0) {
        var i = nums[nums.length - 1]
        nums.pop()
        nums.unshift(i)
        l--
    }
};

var nums = [-1, -100, 3, 99], k = 2
// var nums = [1, 2, 3, 4, 5, 6, 7], k = 3
// var nums = [1, 2, 3], k = 2
// var nums = [1, 2], k = 3
rotate(nums, k);
console.log(nums)

