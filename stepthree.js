/* Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

For example:

findLongestWord("hi", "hello");
// -> 5
*/

function findLongestWord(word) {
    let wordSplit = word.split(' ')
    let longestWord = 0

    for(let i = 0; i < wordSplit.length; i++) {
        if(wordSplit[i].length > longestWord) {
            longestWord = wordSplit[i].length
        }
    }
    return longestWord
}
console.log(findLongestWord('hi, hello'))

