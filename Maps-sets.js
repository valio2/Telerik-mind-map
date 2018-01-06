/* globals Map, Set */

const map = new Map();
const set = new Set();

// Add
map.set('John', 123);
set.add('John');
console.log(map);
console.log(set);

console.log('-'.repeat(50));

// Get - mnogo qko :D
map.set('Jane', []);
for (let i = 0; i < 22; i += 2) {
    map.get('Jane').push(i);
}
console.log(map.get('Jane'));


console.log('-'.repeat(50));

// remove
map.delete('John');
set.delete('John');


// has
console.log(map.has('John'));
console.log(set.has('John'));

// size
console.log(map.size);
console.log(set.size);

// Clear
map.clear();
set.clear();

set.add({
    a: 1
}.toString());
console.log(set);

map.set(0, "joro");
map.set(1, "gosho");
map.set(2, "pesho");
let x = [...map.values()].join(' ');
console.log(x);
