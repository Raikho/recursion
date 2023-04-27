function fibsRec(n, array = []) {
    array = [];

    for (i = 0; i < n; i++)
        array.push(fibsRec2(i));

    return array;
}

function fibsRec2(n) {
    if (n < 2) return n;
    return fibsRec2(n - 1) + fibsRec2(n - 2);
}

console.log('fibsRec(1): ', fibsRec(1)); // returns [0]
console.log('fibsRec(2): ', fibsRec(2)); // returns [0, 1]
console.log('fibsRec(4): ', fibsRec(4)); // returns [0, 1, 1, 2]
console.log('fibsRec(5): ', fibsRec(5)); // returns [0, 1, 1, 2, 3]
console.log('fibsRec(8): ', fibsRec(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]