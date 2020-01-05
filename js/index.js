// Iteration 1: Names and Input

var hacker1 = "Paul";
var hacker2 = "Henri";
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)
console.log(`The driver's name is ${hacker1} \nThe navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

function checkLongest (driver, navigator) {
  if (driver.length > navigator.length) {
    console.log(`The driver has the longest name, it has ${driver.length} characters.`)
  } else if (navigator.length > driver.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters`)
  } else {
    console.log(`Wow, you both have equally long names, ${driver.length} characters!`)
  }
}
checkLongest(hacker1, hacker2)

// Iteration 3: Loops

// Iteration 1

function splitWordWithLoop(word) {
  let newWord = [];
  for (let i=0; i<word.length; i++) {
    newWord.push(word[i], " ")
  }
  return newWord.toUpperCase().join(" ")
}
splitWordWithLoop("John")

function splitWord (word) {
  return word.toUpperCase().split("").join(" ")
}
splitWord("John")

// Iteration 2

function reverseWordWithLoop(word) {
  let newWord = [];
  for (let i=word.length-1; i>=0; i--) {
    newWord.push(word[i])
  }
  return newWord.join("")
}
reverseWordWithLoop("John")

function reverseWord(word) {
  let newWord = word.split("");
  return newWord.reverse().join("");
}
reverseWord("John")

// Iteration 3

function whichGoesFirstWithLoop (word1,word2) {
  var word1Lower = word1.toLowerCase();
  var word2Lower = word2.toLowerCase();
  var wordLength = Math.min(word1.length, word2.length);
  for (let i=0; i<= wordLength-1; i++){
    if (word1Lower[i]>word2Lower[i]) {
      return `The word that comes first is ${word2}`;
    } else if (word2Lower[i]>word1Lower[i]) {
      return `The word that comes first is ${word1}`;
    } else {
      if (i === wordLength-1 && word1.length === word2.length) {
        return "Both words are equal!"
      } else if (i === wordLength-1 && word1.length>word2.length){
        return `The word that comes first is ${word2}`;
      } else if (i === wordLength-1 && word2.length>word1.length) {
        return `The word that comes first is ${word1}`;
      }
      continue 
    }
  }
}
whichGoesFirstWithLoop("before","helloooo")

function whichGoesFirst (word1,word2) {
  var word1Lower = word1.toLowerCase();
  var word2Lower = word2.toLowerCase();
  if (word1Lower === word2Lower) {
    console.log("What?! You both got the same name?")
  } else if (word1Lower > word2Lower) {
    console.log(`${word2} goes first!`)
  } else {
    console.log(`${word1} goes first!`)
  }
}
whichGoesFirst("hello","hella")

function otherWhichGoesFirst (word1,word2) {
  var word1Lower = word1.toLowerCase();
  var word2Lower = word2.toLowerCase();
  let n = word1Lower.localeCompare(word2Lower)
  if (n === 0) {
    console.log("What?! You both got the same name?")
  } else if (n === -1) {
    console.log(`${word1} goes first!`)
  } else {
    console.log(`${word2} goes first!`)
  }
}
otherWhichGoesFirst("hello","hella")

// Bonus 1

function loremIpsum(){
  var string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu fringilla libero, elementum lacinia purus. In eleifend, lorem vitae volutpat lacinia, purus eros faucibus mi, sed porttitor tortor ligula at ante. Praesent posuere ut libero in elementum. Quisque tincidunt elit sapien, quis egestas mi pretium nec. Nullam placerat ex at odio finibus blandit. Vestibulum id lectus sed neque faucibus tempus sit amet vel ante. Phasellus ipsum lectus, dignissim ut nisi et, rhoncus pretium dui. Nulla nec est eget erat aliquet feugiat. Donec velit felis, pretium non lacinia vitae, sagittis in eros. Quisque ac sollicitudin tellus. Phasellus malesuada lectus sed pharetra laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris sed lacinia velit. Suspendisse consectetur est a facilisis auctor. Phasellus accumsan molestie imperdiet. Curabitur accumsan, sem a vehicula commodo, lacus nisi maximus ipsum, et molestie diam sapien non metus. Praesent leo tellus, porta porttitor neque et, tincidunt suscipit lectus. Sed suscipit nisi augue, fermentum tristique mi dignissim a. Aliquam dictum sit amet neque vel tincidunt. Phasellus interdum lorem tincidunt nulla egestas cursus. Ut bibendum sodales efficitur. Nulla pulvinar velit convallis, eleifend nisi eu, pharetra lectus. Morbi orci neque, dictum id magna id, ornare viverra dui. Cras id leo pulvinar, ultricies nisi quis, iaculis est. Vivamus vestibulum lorem a bibendum luctus. Quisque massa ante, pretium eu lacinia in, vestibulum eu diam. Fusce sapien odio, elementum nec malesuada at, maximus nec urna. Aenean condimentum maximus malesuada. Nunc enim ante, lobortis id tempus in, ullamcorper in quam. Donec lobortis quam turpis, at malesuada orci efficitur at. In mattis nulla id urna tempus accumsan. Morbi aliquam turpis at ligula tincidunt ultricies. Proin pellentesque sapien sed eros varius, id maximus erat tempor. Quisque dictum quis tellus et imperdiet. Suspendisse potenti. Donec tincidunt scelerisque neque vitae dignissim. Nam a vehicula ligula, id placerat nisi. Pellentesque molestie orci nulla. Nullam et fermentum massa. Quisque vitae eros ornare, efficitur risus et, sodales erat. Sed sodales arcu bibendum, maximus tellus semper, congue sem."
  // First method: 
  var arrayString = string.split(/[\s,]+/); // using regex
  // Second method:
  // var stringWithoutCommas = string.replace(/,/g, "");
  // var arrayString = stringWithoutCommas.split(" ");
  var count = arrayString.length;
  var repetitions = arrayString.filter(word => word === "et").length;
  return `There are ${count} words in the sentence, and "et" appears ${repetitions} times.`
}
loremIpsum()

// Bonus 2

function checkForPalindromeWithLoop(string){
  var stringWithoutSpecialCharacters = string.replace(/[^a-zA-Z ]/g, "");
  var stringInLowerCase = stringWithoutSpecialCharacters.toLowerCase();
  var oneSingleString = stringInLowerCase.split(" ").join("");
  var stringLength = oneSingleString.length;
  if (stringLength % 2 === 0) {
    for (let i=0; i<stringLength-1; i++) {
      if (oneSingleString[i] === oneSingleString[stringLength-1-i]) {
        continue // at the last iteration, jumps out of the loop and executes the return statement "it's a palindrome"
      } else {
        return "Not a palindrome!"
      }
    }
  } else {
    for (let i=0; i<stringLength-2; i++) {
      if (oneSingleString[i] === oneSingleString[stringLength-1-i]) {
        continue // at the last iteration, jumps out of the loop and executes the return statement "it's a palindrome"
      } else {
        return "Not a palindrome!"
      }
    }
  }
  return "It's a palindrome!"
}
checkForPalindromeWithLoop("helloolleh")

function checkForPalindromeWithReverse(string){
  var oneSingleString = string.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(" ").join(""); // or we use another regex (/[\W_]/g) and we don't have to do split and join, because it also replaces the spaces
  if (oneSingleString === oneSingleString.split("").reverse().join("")){
    return "It's a palindrome"
  } 
  return "It's not a palindrome"
}

checkForPalindromeWithReverse("No 'x' in Nixon")
