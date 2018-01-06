const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '123',
    '6',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;


let counter = 0;
let arr = gets().split('').map(Number);
let N = +gets();
let store = '';
let storePre = '';
let sign;
let result = arr[0];
const generateVariationsWithoutRep = (n, k, index, variation) => {
    if (index === k) {
        print(variation);
        
        // allVariations.push([...variation]);
        // let result = [];
        // let indicator = 0;
        // for (let i = 0; i < arr.length; i += 1) {

        //     if (arr[i + 1] === 0 && variation[i] === '0') {
        //         indicator = 1;
        //         break;
        //     }

        //     result.push(arr[i]);
        //     if (typeof variation[i] !== 'undefined' &&
        //         variation[i] !== '0') {
        //         result.push(variation[i]);
        //     }
        // }
        // if (indicator === 0) {
        //     if (eval(result.join('')) === N) {
        //         print(result);
        //         counter += 1;
        //     }
        // }
        return;
    }

    for (let i = 0; i < n.length; i += 1) {
        // if (n[i + 1] !== '0') {
        //     if (n[i] === '*') {
        //         result *= arr[index + 1];
        //     } else if (n[i] === '+') {
        //         result += arr[index + 1];
        //     } else if (n[i] === '-') {
        //         result -= arr[index + 1];
        //     } else {
        //         storePre = '' + arr[index] + arr[index + 1];
        //     }
        // } else if (arr[i + 1] !== 0) {
        //     if (n[i] === '*') {
        //         result *= Number('' + arr[index + 1] + arr[index + 2]);
        //     } else if (n[i] === '+') {
        //         result *= Number('' + arr[index + 1] + arr[index + 2]);
        //     } else if (n[i] === '-') {
        //         result *= Number('' + arr[index + 1] + arr[index + 2]);
        //     } else {

        //     }
        // }
        variation[index] = n[i];
        generateVariationsWithoutRep(n, k, index + 1, variation);
    }
}




const n = ['*', '+', '-', '0'];
const k = arr.length - 1;
const variation = Array.from({
    length: k,
});
const used = Array.from({
    length: n,
});
//const allVariations = [];
generateVariationsWithoutRep(n, k, 0, variation, used);

print(counter);