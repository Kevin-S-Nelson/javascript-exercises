/*const removeFromArray = function(someArray) {
    let newArray = [];
    let j = 1;
    for (let i = 0; i < someArray.length; i++) {
        if (someArray[i] == arguments[j]) {
            newArray = newArray;
        } else {
            newArray.push(someArray[i]);
        }
    }
    return newArray;
};*/

const removeFromArray = function(someArray) {
    let newArray = [];
    let match = false;
    for (let i = 0; i < someArray.length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            if (someArray[i] == arguments[j]) {
                match = true;
                break;
            } else {
                match = false;
            }
        }
        if (match) {
            continue;
        } else {
            newArray.push(someArray[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;