const sumAll = function(start, end) {
    sum = 0;
    if (start > 0 && end > 0 && typeof start == 'number' && typeof end == 'number') {
        if (start < end ) {
            for (let i = start; i <= end; i++) {
                sum += i;
            }
        } else {
            for (let i = end; i <= start; i++) {
                sum += i;
            }
        }
    } else {
        sum = "ERROR"
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;