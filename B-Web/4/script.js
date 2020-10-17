// Lägg till en input och en knapp. 
// När du trycker på knappen ska innehållet i inputen loggas till konsolen i stora bokstäver

let userInput = document.getElementById("userInput")

function output(){
    console.log(userInput.value)
}

document.getElementById("knapp").onclick = output