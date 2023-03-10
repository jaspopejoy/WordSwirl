
//get user input
function getValues(){

    // make sure the alert is invisible
    document.getElementById("alert").classList.add("invisible");

    //get user string from the page
    let userString = document.getElementById("userString").value;

    //check for a palindrome
    let returnObj = checkForPalindrome(userString);

    //display message to the screen
    displayMessage(returnObj);

}

//check if string is palindrome
function checkForPalindrome(userString){

    //change userString to lower case
    userString = userString.toLowerCase();

    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");

    //set up array
    let revString = [];

    //set up object
    let returnObj = {};

    //reverse userString
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];        
    }

    //check to see if userString equals revString
    if (revString == userString) {
        returnObj.msg = "Well done! you entered a palindrome!"
    }
    else {
        returnObj.msg = "Sorry! You did not enter a palindrome!"
    }

    returnObj.reversed = revString;

    return returnObj;
}

// display a message to the screen
function displayMessage(returnObj){

    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your Phrase Reversed Is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}