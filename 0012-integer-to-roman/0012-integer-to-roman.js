/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
    const numInString = String(num);
    let result = "";
    const romanIntegers = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M",
    }

    for (let i = 0; i < numInString.length; i++) {
        let current = numInString[i];
        let currDigit = "1".padEnd(numInString.length - i, "0");

        if (current === "0") {
            continue;
        }
        
        if (current === "4" || current === "9") {
            const target = Number(current) + 1;

            result += romanIntegers[currDigit];
            result += romanIntegers[String(target) * currDigit];
            
            continue;
        }
        
        if (romanIntegers[current]) {
            result += romanIntegers[Number(current) * Number(currDigit)];

            continue;
        }
        
        while (current) {
            if (current > 5) {
                result += romanIntegers[5 * currDigit];
                current -= 5;
            }

            result += romanIntegers[currDigit];
            current--;
        } 
    }
    
    return result;
};