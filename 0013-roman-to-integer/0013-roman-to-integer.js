/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    const stringInArr = [...s];
    const numberInArr = [];
    let result = 0;

    for (let i = 0; i < stringInArr.length; i++) {
        numberInArr.push(romanNumerals[stringInArr[i]]);
    }
    
    for (let j = 0; j < numberInArr.length; j++) {
        if (!numberInArr[j + 1]) {
            result += numberInArr[j];
        }
        
        if (numberInArr[j] >=  numberInArr[j + 1]) {
            result += numberInArr[j];
        }
        
        if (numberInArr[j] <  numberInArr[j + 1]) {
            result -= numberInArr[j];
        }
    }

    return result;
};