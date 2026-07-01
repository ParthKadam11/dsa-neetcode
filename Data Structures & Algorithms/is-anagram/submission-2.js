class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length) return false
        let mp=new Map()
        for(let ch of s){
            mp.set(ch,(mp.get(ch)||0)+1)
        }
        for(let ch of t){
            let count = mp.get(ch)
            if(!count)return false
            mp.set(ch,(count-1))
        }
        return true
    }
}
