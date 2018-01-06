Math.randomInt = (min, max) => Math.trunc(Math.random() * (max - min + 1)) + min;

const generateRandomArray = (min, max) => {
    const result = [];
    for (let i = min; i <= max; i += 1) {
        result.push(i);
    }

    for (let i = 0; i < result.length - 1; i += 1) {
        const randomIndex = Math.randomInt(i + 1, result.length - 1);
        [result[randomIndex], result[i]] = [result[i], result[randomIndex]];
    }

    return result;
};

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i += 1) {
        let bestIndex = i;
        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[bestIndex] > arr[j]) {
                bestIndex = j;
            }
        }
        if (bestIndex !== i) {
            [arr[bestIndex], arr[i]] = [arr[i], arr[bestIndex]];
        }
    }
};

const bubbleSort = (arr) => {
    let isSwapDone = false;
    while (!isSwapDone) {
        isSwapDone = true;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                isSwapDone = false;
            }
        }
    }
}


const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i += 1) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            j -= 1;
        }
    }
    return [...arr];
}

const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    if (arr.length < 16) {
        return insertionSort(arr);
    }

    const pivotIndex = Math.trunc(arr.length / 2);
    // const pivotIndex = (arr.length / 2) | 0;
    const pivot = arr[pivotIndex];
    let left = [];
    let right = [];

    for (let i = 0; i < pivotIndex; i += 1) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    for (let i = pivotIndex + 1; i < arr.length; i += 1) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    left = quickSort(left);
    right = quickSort(right);

    return [...left, pivot, ...right];
}

const mergeSort = (arr) => {
    const merge = (left, right) => {
        let i = 0;
        let j = 0;
        const result = [];
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i]);
                i += 1;
            } else {
                result.push(right[j]);
                j += 1;
            }
        }

        while (i < left.length) {
            result.push(left[i]);
            i += 1;
        }

        while (j < right.length) {
            result.push(right[j]);
            j += 1;
        }

        return result;
    }

    if (arr.length < 2) {
        return arr;
    }

    if (arr.length < 16) {
        return insertionSort(arr);
    }

    const middle = Math.trunc(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

const countingSort = (arr, min, max) => {
    const counts = Array.from({
        length: max - min + 1
    }).fill(0);

    for (let i = 0; i < arr.length; i += 1) {
        counts[arr[i] - min] += 1;
    }

    const result = [];
    for (let i = 0; i < counts.length; i += 1) {
        let j = counts[i];
        while (j > 0) {
            result.push(i + min);
            j -= 1;
        }
    }
    return result;
}


let arr = generateRandomArray(1, 10000000);
let arr2 = [...arr];

console.time('built-in sort');
arr.sort((a, b) => a - b);
console.timeEnd('built-in sort');

// let arr2 = generateRandomArray(-10, 11);

console.time('counting sort');
arr2 = countingSort(arr, -10, 11);
console.timeEnd('counting sort');
