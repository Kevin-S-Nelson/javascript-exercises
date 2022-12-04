const reverseString = function(someString) {
    stringReversed = ""; 
    someArray = someString.split("");
    arrayReversed = [];
    for (let i = someArray.length - 1; i >= 0; i--) {
        arrayReversed.push(someArray[i]);
    }
    return arrayReversed;
};

// Do not edit below this line
module.exports = reverseString;
