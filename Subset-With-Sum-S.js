let numbers = [2, 1, 2, 4, 3, 5, 2, 6];
const s = 14;

const sums = Array.from({
        length: s + 1
    })
    .fill(false);

// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14
// 1 1 1 1 1

sums[0] = true;

for (const number of numbers) {
    for (let sum = s; sum >= 0; sum -= 1) {
        if (sums[sum]) {
            const newSum = sum + number;
            if (newSum > s) {
                continue;
            }
            sums[newSum] = true;
        }
    }
}