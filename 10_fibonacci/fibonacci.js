const fibonacci = function(fibIndex) {
    let fibArray = [1,1];
    if (fibIndex < 0) {
        return "OOPS";
    }
    for (let i = 2; i < fibIndex; i++) {
        fibArray.push(fibArray[i-2] + fibArray[i-1]);
    }
    return fibArray[fibIndex - 1];
};

// Do not edit below this line
module.exports = fibonacci;
