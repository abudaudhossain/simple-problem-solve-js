// get minimum number of two numbers
function getMinNumber(num1, num2) {
    if (num1 < num2) {
        return num1;
    }
    else{
        return num2;
    }
}

// get minimum number of three numbers
function getMinNumber2(num1, num2, num3){
    if(num1 < num2 && num1 < num3) {
        return num1;
    }else if(num2 < num3){
        return num2;
    }else{
        return num3;
    }
}
let myMinNumber = getMinNumber(23, 12);
console.log(myMinNumber);
myMinNumber = getMinNumber2(23, 162, 63);
console.log(myMinNumber); 