// get maximum number of two numbers
function getMaxNumber(num1, num2) {
    if(num1 > num2) {
        return num1;
    }else{
        return num2;
    }
}
// get miximum number of three numbers
function getMaxNumber2(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if(num2 > num3) {
        return num2;
    }else{
        return num3;
    }
}

let myMaxNumber = getMaxNumber(43, 34);
console.log(myMaxNumber);
myMaxNumber = getMaxNumber2(443, 324, 45);
console.log(myMaxNumber);

myMaxNumber = Math.max(23, 45, 21);
console.log(myMaxNumber);