/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const tempStack = [];
    const openings = ["[", "{", "("];
    const closings = ["]", "}", ")"];

    if (closings.includes(s[0])) {
        return false;
    }

    if (s.length <= 1) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        const current = s[i];

        if (openings.includes(current)) {
            tempStack.push(current);
        }

        if (closings.includes(current)) {
            if (!tempStack.length) {
                return false;
            }
            
            const lastElement = tempStack[tempStack.length - 1];

            if ((lastElement == "[" && current !== "]")
                || (lastElement == "{" && current !== "}")
                || (lastElement == "(" && current !== ")")) {
                return false;
            }

            tempStack.pop();
        }
    }

    if (tempStack.length) {
        return false;
    }

    return true;
};