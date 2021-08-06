// find the largest element of an array 
function getLergestElement(arr) {
    let lergest = arr[0];
    let i = 1;
    while (i < arr.length){
        if(arr[i] > lergest){
            lergest = arr[i];
        }
        i++;
    }

    return lergest;
}

let ages = [12, 45, 54, 56, 75, 32, 23, 12, 43];
let oldest = getLergestElement(ages);

console.log(oldest);