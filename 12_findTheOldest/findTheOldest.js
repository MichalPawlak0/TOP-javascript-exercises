const findTheOldest = function(arr) {
let youngToOld = arr.sort((a,b)=>{
    if(!a.yearOfDeath){
        const date = new Date()
        a.yearOfDeath = date.getFullYear()
    }else if (!b.yearOfDeath){
        const date = new Date()
        b.yearOfDeath = date.getFullYear()
    }

    return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
})
console.log(youngToOld)
return youngToOld[0]
};

// Do not edit below this line
module.exports = findTheOldest;
