function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]];

    while (queue.length > 0) {
        let [word, length] = queue.shift();
        if (word === endWord) return length;

        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) {
                let newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
                if (wordSet.has(newWord)) {
                    queue.push([newWord, length + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }

    return 0;
}

// Test cases
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // Output: 5
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); // Output: 0
console.log(ladderLength("a", "c", ["a","b","c"])); // Output: 2
