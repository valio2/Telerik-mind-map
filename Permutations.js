const getPermutations = (arr) => {
    const permutations = [];


    const generatePermutations = (index, perm, visited, values, all) => {
        if (index === values.length) {
            all.push([...perm]);
            return;
        }
        for (let value of values) {
            // check for visited
            if (visited[value]) {
                continue;
            }
            perm[index] = value;
            // mark value as visited 
            visited[value] = true;
            generatePermutations(index + 1, perm, visited, values, all);
            // unmark value as visited
            visited[value] = false;
        }
    }

    generatePermutations(0, [], {}, arr, permutations);

    return permutations;
}

const perms = getPermutations([1, 2, 3]);
console.log(perms.length);

perms.forEach(permutation => console.log(permutation));