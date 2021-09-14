function getValue(){
    //set alert to invisible in case multiple uses happen
    document.getElementById("alert").classList.add("invisible");
    //get value from input with id "userInput"
    let str = document.getElementById("userInput").value;
    //create a version of the input in lower case without special characters
    let lowerCase = str.toLowerCase();
	let cleanStr = lowerCase.replace(/[^a-zA-Z]/g, "");
    //pass the cleanStr to the logic function to check if input was palindrome
    let isPalindrome = palindromeCheck(cleanStr);
    // pass boolean and cleaned input reversed into display function to build proper display
    let reverseStr = cleanStr.split("").reverse().join("");
    display(isPalindrome, reverseStr);

}

function palindromeCheck(str){
    //reverse cleaned string that was passed in
    let reverseStr = str.split("").reverse().join("");
    //use an if statement to return a boolean if the string is a palindrome
    if (str == reverseStr){
        return true;
    } else {
        return false;
    }
}

function display(p, o){
    //check boolean that was passed and build inner html of the alert according to the argument passed in. 
    if (p){
        document.getElementById("alertHeading").innerHTML = `Well done! You entered a palindrome!`;
        document.getElementById("alertBody").innerHTML = `Your phrase reversed is ${o}`;
        document.getElementById("alert").classList.remove("invisible");
    } else {
        document.getElementById("alertHeading").innerHTML = `Uh Oh!`;
        document.getElementById("alertBody").innerHTML = `Your phrase is NOT a palindrome!`;
        document.getElementById("alert").classList.remove("invisible");
    }
}