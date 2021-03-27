/*
 * zhusujuan - 2021-03-27
 * 【删除排序数组中的重复项】
 *
 *  给你一个有序数组nums, 请你原地删除重复出现的元素, 使每个元素只出现一次, 返回删除后数组的新长度。
 *  不要使用额外的数组空间，你必须在`原地`修改输入数组并在使用 O(1) 额外空间的条件下完成。
 *
 * @param {number[]} nums
 * @return {number}
 */
var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6];
var removeDuplicates = function (nums) {
  let realI = 0;
  for (let i of nums) {
    if (nums[realI] != i) {
      nums[++realI] = i;
    }
  }
  return realI + 1;
};
const realArr = removeDuplicates(nums);
console.log(realArr, nums.join(","));
