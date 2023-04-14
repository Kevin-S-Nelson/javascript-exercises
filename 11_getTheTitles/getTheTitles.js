const getTheTitles = function(books) {
    let title = [];
    let author = [];
    let values = {title, author};

    books.forEach(o => Object.entries(o).forEach(([k, v]) => values[k].push(v)));
    return title;
};

// Do not edit below this line
module.exports = getTheTitles;
