const removeFromArray = function(elements , ...args) {
    
    return elements.filter(element => !args.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
