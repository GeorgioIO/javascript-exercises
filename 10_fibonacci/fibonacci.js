const fibonacci = function(numberToGet) {
    if (numberToGet == 0)
    {
        return 0;
    }
    else if(numberToGet < 0)
    {
        return "OOPS"
    }
    let fiboSequence = [1 , 1]
    for(let i = 2 ; i <= numberToGet; i++)
    {
        fiboSequence = fiboSequence.concat(fiboSequence.slice(i - 2).reduce((total , currentNumber) => {
            return total + currentNumber
        }))
    }
    return fiboSequence[numberToGet - 1]
};

// Do not edit below this line
module.exports = fibonacci;
