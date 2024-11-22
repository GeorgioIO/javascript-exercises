const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanString = word
    .toLowerCase()
    .split("")
    .filter(w => alphanumerical.includes(w))
    .join("")

    const reverseString = Array.from(cleanString).reverse().join("")

    return reverseString === cleanString
};

// Do not edit below this line
module.exports = palindromes;
