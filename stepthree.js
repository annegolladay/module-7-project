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

//I believe the runtime for this function would be O(n) - linear time because of the input of the words or strings can be any number of words, there is no limit to the amount that could go in. There is also a for loop with a .length so the loop needs to loops through all of the words/strings that we are inputting. It is not constant or consistent but is clearly linear runtime. 