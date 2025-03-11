"use strict";
//Constants

//Characters
const numbers = "0123456789"
const lowerLetters = "abcdefghijklmnopqrstuvwxyz"
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const specials = "@€#£$§%&"

//Functions

//Charset creation function
function createCharset() {
    let charSet = "";
    if (document.getElementById("buttonNumbers").checked) {
        charSet += numbers;
    }
    if (document.getElementById("buttonLowerLetters").checked) {
        charSet += lowerLetters;
    }
    if (document.getElementById("buttonUpperLetters").checked) {
        charSet += upperLetters;
    }
    if (document.getElementById("buttonSpecials").checked) {
        charSet += specials;
    }
    return charSet;
}

//Password Creation functions
function createPassword(numberOfChar,charSet) {
    let password = ""
    for (let index = 0; index < numberOfChar; index++) {
        password += charSet[Math.floor(Math.random() * charSet.length)] 
    }   
    return password
}

function generatePassword() {
    let charSet = createCharset();
    let numberOfChar = parseInt(document.getElementById("numberOfChar").value);
    if (charSet.length === 0) {
        document.getElementById("result").innerText = "Select at least one character type";
        return;
    }
    let password = createPassword(numberOfChar, charSet);
    document.getElementById("result").innerHTML = `${password}<i class="fa-solid fa-copy" id="icon" onclick="copyToClipboard()"></i>`;}

function copyToClipboard() {

    let copyText = document.getElementById("result").innerText;
    let icon = document.getElementById("icon");
      
    navigator.clipboard.writeText(copyText).then(() => {
        icon.classList.remove("fa-copy");
        icon.classList.add("fa-check");

        // Restaurar el icono después de 2 segundos
        setTimeout(() => {
            icon.classList.remove("fa-check");
            icon.classList.add("fa-copy");
        }, 2000);
    }).catch(err => {
        console.error("Error copying text: ", err);
    });
  } 




