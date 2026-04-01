class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isAlphanumeric(ch) {
            return (
                (ch >= 'a' && ch <= 'z') ||
                (ch >= 'A' && ch <= 'Z') ||
                (ch >= '0' && ch <= '9')
            );
        }
        s=s.toLowerCase()
        let i=0
        let j=s.length-1

        while(i<j){
            if(!isAlphanumeric(s[i])){
                i++
                continue
            }
            if(!isAlphanumeric(s[j])){
                j--
                continue
            }
            if(s[i]==s[j]){
                i++
                j--
            }else{
                return false
            }
        }
        return true
    }
}
