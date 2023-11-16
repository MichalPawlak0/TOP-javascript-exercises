const palindromes = function (phrase) {
   let strArr = phrase.replace(/[\.,?!\s]/g,"").split("").join().toLowerCase()
   let rev = phrase.replace(/[\.,?!\s]/g,"").split("").reverse().join().toLowerCase()
    return strArr===rev
};

// Do not edit below this line
module.exports = palindromes;
