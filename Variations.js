const generateVariationsWithoutRep = (n, k, index, variation, used, allVariations) => {
    if (index === k) {
        allVariations.push([...variation]);
        return;
    }

    for (let i = 0; i < n; i += 1) {
        if (used[i]) {
            continue;
        }

        variation[index] = i;
        used[i] = true;
        generateVariationsWithoutRep(n, k, index + 1, variation, used, allVariations);
        used[i] = false;
    }
}

const n = 5;
const k = 3;
const variation = Array.from({
    length: k,
});
const used = Array.from({
    length: n,
});
const allVariations = [];
generateVariationsWithoutRep(n, k, 0, variation, used, allVariations);

console.log(allVariations.length);
allVariations.forEach(variation => console.log(variation.join(' ')));