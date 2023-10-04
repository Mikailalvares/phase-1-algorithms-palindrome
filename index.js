function isPalindrome(word) {
  // Write your algorithm here
  function isPalindrome(str) {
    // Convert the string to lowercase
    const cleanStr = str.toLowerCase();
    
    // Compare the cleaned string with its reverse
    const reversedStr = cleanStr.split("").reverse().join("");
    
    return cleanStr === reversedStr;
  }
  
  // Test cases
  console.log(isPalindrome("mom"));              // true
  console.log(isPalindrome("racecar"));          // true
  console.log(isPalindrome("A man a plan"));     // false (includes spaces)
  console.log(isPalindrome("Was it a car or a cat I saw?")); // false (includes spaces and special characters)
  

}

/* 
  Add your pseudocode here
  Function isPalindrome(str):
    // Clean the input string by removing spaces and converting to lowercase
    cleanedStr = removeSpacesAndLowerCase(str)

    // Initialize pointers for the start and end of the cleaned string
    start = 0
    end = length of cleanedStr - 1

    // Loop while start is less than end
    while start < end:
        // If characters at start and end don't match, return false
        if cleanedStr[start] ≠ cleanedStr[end]:
            return false

        // Move pointers inward
        start++
        end--

    // If the loop completes without returning false, it's a palindrome
    return true

Function removeSpacesAndLowerCase(str):
    // Remove spaces and convert the string to lowercase
    cleanedStr = ""
    for each character in str:
        if character is not a space:
            add lowercase character to cleanedStr
    return cleanedStr

*/

/*
  Add written explanation of your solution here
 // The isPalindrome function takes a string as input.

//It creates a reversedStr by splitting the cleanStr into an array of characters, reversing the array using reverse(), and then joining it back into a string using join("").

//Finally, it compares the cleaned string (cleanStr) with its reversed counterpart (reversedStr) and returns true if they are the same (i.e., it's a palindrome) or false otherwise.


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

// Test cases
console.log(isPalindrome("madam"));           // true
console.log(isPalindrome("robot"));           // false
console.log(isPalindrome("race car"));        // true
console.log(isPalindrome("A man a plan a canal Panama")); // true

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
