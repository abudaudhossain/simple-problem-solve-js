// get sum of array all elements 
function getSum(arr) {
    let sum = 0;
    let i = 0;
    while(i < arr.length){
       sum += arr[i];
        i++;
    }

    return sum;
}

let numbers = [12, 43, 45, 24, 53, 35, 32];
let sumNubers = getSum(numbers);

console.log(sumNubers);