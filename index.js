function isPalindrome(word) {
 // Reverse the word
 const reversedWord = word.split("").reverse().join("");
 // Compare the original word with the reversed word
 return word === reversedWord;
}


/*
  Get the string as input
  Reverse the string
  Compare the original string with the reversed string
  If same, return true
  Otherwise, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("bob"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("abracadabra"));
}

module.exports = isPalindrome;
