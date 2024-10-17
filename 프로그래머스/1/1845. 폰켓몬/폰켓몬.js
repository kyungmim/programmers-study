function solution(nums) {
     const maxSelect = nums.length / 2;
    const distinctNums = [...new Set(nums)];  
    return Math.min(distinctNums.length, maxSelect);
}