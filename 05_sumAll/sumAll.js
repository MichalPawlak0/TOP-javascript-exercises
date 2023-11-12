const sumAll = function(num1, num2) {
    if((num1<0||num2<0)||(typeof num1!=="number"||typeof num2!=="number")){
        return "ERROR";
    }
    
    let start,finish;
    if(num1>num2){
        start=num2;
        finish=num1;
    }else{
        start=num1;
        finish=num2;
    }
    let sum=0;
    for (let i = start; i <= finish; i++) {
        sum +=i;        
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
