// find the lowest element of an array 

function getLowestElement(arr){
    let lowest = arr[0];
    let i = 1;
    while (i < arr.length) {
        if(arr[i] < lowest) {
            lowest = arr[i];
        }

        i++;
    }
    return lowest;
}

let numbers = [12, 45, 54, 56, 75, 32, 23, 2, 43];

let lowestNumbers = getLowestElement(numbers);
console.log(lowestNumbers);