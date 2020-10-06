function factorial(n){
    const cache = {};
    if(!cache[n]) {
        cache[n] =  (n === 1 )? n : n * factorial(n-1)
    }
    return cache[n]
}

console.log(factorial(3));
console.log(factorial(5))