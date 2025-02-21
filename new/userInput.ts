// Input string
let input = "Hello World";

// 1. Count occurrences of each character
const charCount: any = {};

for (let char of input) {
    if (char in charCount) {
        charCount[char]++; 
    } else {
        charCount[char] = 1; 
    }
}
console.log("Character Occurrences:", charCount);



// 2. Find the most common character
let mostCommonChar = "";
let maxCount = 0;
for (const char in charCount) {
    if (charCount[char] > maxCount) {
        mostCommonChar = char;
        maxCount = charCount[char];
    }
}

console.log("Most Common Character:", mostCommonChar);

// 3. Reverse the string

let reverseString:string="";
for(let element=input.length-1; element>=0; element--){
    reverseString = reverseString + input[element];
}
console.log("Reversed String is: ",reverseString);


// 4. Check if the string is a palindrome
if(input === reverseString){
    console.log("'",input,"' is a palindrome!");
}
else{
    console.log("'",input,"' is not a palindrome!");
}

// 5. Remove all vowels from the string
let result: string = "";

for (let char of input) {
    if (!"aeiouAEIOU".includes(char)) {
        result += char; // Append only non-vowel characters
    }
}

console.log("String Without Vowels:", result);
