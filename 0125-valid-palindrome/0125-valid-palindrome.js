/**
 * @param {string} s
 * @return {boolean}
 */
 const isPalindrome = function(s) {
    if (s.length === 0 || s.length === 1) {
        return true;
    }
     
    let c1 = "";
    let c2 = "";
     
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        while (true) {
            if (/[a-zA-Z0-9]/.test(s.charAt(i))) {
                c1 = s.charAt(i);
                break;
            }
            
            i++;
            
            if (i > s.length) {
                break;
            }
        }
        
        while (true) {
            if (/[a-zA-Z0-9]/.test(s.charAt(j))) {
                c2 = s.charAt(j);
                break;
            }
            
            j--;

            if (j < 0) {
                break;
            }
        }
        
        if (c1.toLowerCase() !== c2.toLowerCase()) {
            return false;
        }
    }
     
    return true;
};