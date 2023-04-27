function fibs(n) {
    if (n == 1) return [0];
    if (n == 2) return [0, 1];

    let array = [0, 1];

    for (let i = 2; i < n; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }

    return array;
}

console.log('fibs(1): ', fibs(1)); // returns [0]
console.log('fibs(2): ', fibs(2)); // returns [0, 1]
console.log('fibs(5): ', fibs(5)); // returns [0, 1, 1, 2, 3]
console.log('fibs(8): ', fibs(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]