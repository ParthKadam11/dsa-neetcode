class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let i=0,j=i+1
        if(nums.length==0){
            return 0
        }
        if(nums.length==1){
            return 1
        }
        while(j<nums.length){
            if(nums[j]==nums[i]){
                j++
            }
            if(nums[j]!=nums[i]){
                i++
                nums[i]=nums[j]
            }
        }return i
    }
}
