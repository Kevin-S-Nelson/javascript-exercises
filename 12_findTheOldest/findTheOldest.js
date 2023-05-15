const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPersonIndex = 0;
    // Calculate the age of each person and the largest number for age
    for (let i = 0; i < people.length; i++) {
        people[i].age = people[i].yearOfDeath - people[i].yearOfBirth;
        if (people[i].age > oldestAge) {
            oldestAge = people[i].age;
            oldestPersonIndex = i;
        }
    }
return people[oldestPersonIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
