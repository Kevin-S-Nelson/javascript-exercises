const removeFromArray = function(someArray) {
    let newArray = [];
    let match = false;
    for (let i = 0; i < someArray.length; i++) { 
        for (let j = 1; j < arguments.length; j++) {
            if (someArray[i] === arguments[j]) {
                match = true;
                break; // Match found, no need to keep checking
            } else {
                match = false;
            }
        }
        if (match) {
            continue; // If it matches, we do not want to add the new array
        } else {
            newArray.push(someArray[i]); // If it does have a match, add it
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;