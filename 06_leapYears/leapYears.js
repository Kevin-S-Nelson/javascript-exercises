const leapYears = function(year) {
    let isLeapYear = false;
    if (year % 4 === 0) {
        isLeapYear = true;
    } else {
        isLeapYear = false;
    }
    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;