"use strict";
//Constants

//Characters
const numbers = "0123456789"
const lowerLetters = "abcdefghijklmnopqrstuvwxyz"
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const specials = "!@€#£$§%&*+-<>;,.:_~^«»"

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
        document.getElementById("result").innerText = "Selecciona al menos un tipo de carácter";
        return;
    }
    let password = createPassword(numberOfChar, charSet);
    document.getElementById("result").innerText = "Contraseña: " + password;
}


