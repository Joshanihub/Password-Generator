const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"
];

let randomPasswordOne = document.getElementById("randomPassword-One");
let randomPasswordTwo = document.getElementById("randomPassword-Two");

// Function to generate a random password of given length
function generateRandomPassword(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

// Function to generate and display passwords
function generatePassword() {
    randomPasswordOne.textContent = generateRandomPassword(15);
    randomPasswordTwo.textContent = generateRandomPassword(15);
}




//Stretch Goals//

// Function to copy text to clipboard
function copyToClipboard(element) {
    const text = element.textContent;
    if (!text) return;

    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard: " + text);
    }).catch(err => {
        console.error("Failed to copy:", err);
    });
}

// Add event listeners for clicking to copy
randomPasswordOne.addEventListener("click", function() {
    copyToClipboard(randomPasswordOne);
});

randomPasswordTwo.addEventListener("click", function() {
    copyToClipboard(randomPasswordTwo);
});
