// 819. Most Common Word



// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.







var mostCommonWord = function(paragraph, banned) {
    // Step 1: Normalize paragraph by removing punctuation and converting to lowercase
    let words = paragraph.toLowerCase().replace(/[^\w\s]/g, ' ').split(/\s+/);
    
    // Step 2: Create a set for banned words to optimize lookup
    let bannedSet = new Set(banned);

    // Step 3: Count the occurrences of each word that is not banned
    let map = new Map();
    for (let word of words) {
        if (!bannedSet.has(word) && word.length > 0) { // Check if word is not banned and not empty
            map.set(word, (map.get(word) || 0) + 1);
        }
    }

    // Step 4: Find the most common word
    let mostCommon = "";
    let maxCount = 0;
    for (let [word, count] of map) {
        if (count > maxCount) {
            mostCommon = word;
            maxCount = count;
        }
    }

    return mostCommon;
};
