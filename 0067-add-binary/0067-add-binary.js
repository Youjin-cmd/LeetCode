/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
    let result = "";
    let carry = 0;

    while (a.length < b.length) {
        a = "0" + a;
    }
    while (b.length < a.length) {
        b = "0" + b;
    }

    for (let i = a.length - 1; i >= 0; i--) {
        const bitA = parseInt(a[i]);
        const bitB = parseInt(b[i]);
        const sum = bitA + bitB + carry;

        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    if (carry > 0) {
        result = "1" + result;
    }

    return result;
};