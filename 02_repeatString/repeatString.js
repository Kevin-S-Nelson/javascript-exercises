const repeatString = function(someString, numberOfRepeats) {
    concatString = "";
    if (numberOfRepeats >= 0) {
        for (let i = 0; i < numberOfRepeats; i++) {
            concatString += someString;
        }
    } else {
        concatString = "ERROR"
    }    
    return concatString;
};

// Do not edit below this line
module.exports = repeatString;
