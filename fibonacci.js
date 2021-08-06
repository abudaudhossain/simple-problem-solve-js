let fibo = [0, 1];
for (let i = 2; i <= 15; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo);

// difine function fibonacci 
function getFibonacci(len) {
    let fibo = [0, 1];
    for (let i = 2; i <= len; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

let newfibo = getFibonacci(20);
console.log(newfibo);

// validation function for fibonacci
function getVelidFibonacci(len) {
    if (typeof len != 'number') { 
        return 'Plese Enter the Number';
    }
    if(len <= 1){
        return 'Plese Enter positive Number';
    }
    let fibo = [0, 1];
    for (let i = 2; i <= len; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
 newfibo1 = getVelidFibonacci([-20]);
console.log(newfibo1);
