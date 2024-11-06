const repeatString = function(word , reps) {
    if (reps < 0)
    {
        return "ERROR";
    }
    
    let formedString = ""; 
    
    for(let i = 0; i < reps; i++)
    {
        formedString += word;
    }
    return formedString;
};

// Do not edit below this line
module.exports = repeatString;
