function mergeSort(arr) {
    let length = arr.length;
    let half = length / 2;

    if (length <= 2) {
        if (arr[0] > arr[1]) {
            let temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
        }
        return arr;
    }

    let first = mergeSort(arr.slice(0, half));
    let second = mergeSort(arr.slice(half, length));
    let third = [];

    while (!(first.length == 0 && second.length == 0)) {
        if (first.length == 0) {
            third = third.concat(second);
            break;
        }
        if (second.length == 0) {
            third = third.concat(first);
            break;
        }

        if (first[0] < second[0])
            third.push(first.shift());
        else
            third.push(second.shift());
    }

    return third;
}

console.log('mergeSort([2,1]): ', mergeSort([2,1])); // returns [1, 2]
console.log('mergeSort([4,9,3,8,1,2,7]): ', mergeSort([4,9,3,8,1,2,7]));
// returns [1, 2, 3, 4, 7, 8, 9]