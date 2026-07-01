class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let mp =new Map()
        for(let i=0;i<nums.length;i++){
            let count=(mp.get(nums[i]) || 0)+1
            mp.set(nums[i],count)
            if(count>1){
                return true
            }
        }
        return false
    }
}
