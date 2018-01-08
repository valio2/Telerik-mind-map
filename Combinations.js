const generateCombinationsWithoutRep = (n, k, index, combination, allCombinations, rep) => {
    if (index === k) {
        allCombinations.push([...combination]);
        return;
    }

    let addition = rep ? 0 : 1;
    const start = index ? combination[index - 1] + addition : 1;
    for (let i = start; i <= n; i += 1) {
        combination[index] = i;
        generateCombinationsWithoutRep(n, k, index + 1, combination, allCombinations, rep);
    }
}

const n = 5;
const k = 3;
const combination = Array.from({
    length: k
});
const allCombinations = [];

generateCombinationsWithoutRep(n, k, 0, combination, allCombinations, true); // true defines if we want repetitions or not

console.log(allCombinations.length);
allCombinations.forEach(combination => console.log(combination.join(' ')));