const traverseDomWithDfs = function* (node) {
    yield node;
    for (const child of node.childNodes) {
        yield* traverseDomWithDfs(child);
    }

}

const rootNode = document.getElementsByTagName('html')[0];
let count = 0;
for (const node of traverseDomWithDfs(rootNode)) {
    count++;
    // console.log(node);
    if (node.innerHTML === 'Learn more') {
        node.style.display = 'none';
        break;
    }
}

console.log(count);
