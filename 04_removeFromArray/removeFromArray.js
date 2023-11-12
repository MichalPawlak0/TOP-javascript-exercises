const removeFromArray = function(arr,...nums) {
        for (let i = 0; i < nums.length; i++) {
            if(arr.indexOf(nums[i])>=0){
            arr.splice(arr.indexOf(nums[i]),1);
            }
        }
        return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
