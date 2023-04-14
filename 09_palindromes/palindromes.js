const palindromes = function (someStr) {
    let isPalindrome = false;
    // first translate the sting to all lower case
    let lowerStr = someStr.toLowerCase();
    // then ignore anything that isn't a lower case letter (space, special character)
    let cleanStr = lowerStr.replace(/[^a-z]/g, '');
    // create a new sting that is the reverse of the first sting
    function reverseString(str) {
        let newStr = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newStr += str[i];
        }
        return newStr;
    } 
        // console.log(reverseString(cleanStr));
        // console.log(cleanStr);
    // compare the two strings and if they match return true
    if (reverseString(cleanStr) == cleanStr) {
        isPalindrome = true;
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
