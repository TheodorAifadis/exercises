// Lägg till en knapp med texten 0. 
// Varje gång du trycker på knappen ska texten öka med 1. Så det blir 0, 1, 2, 3, 4, 5, 6 ...

const knapp = document.getElementById('knapp')

let count = 0

knapp.onclick = counter 

function counter(){
    count++ 
    knapp.innerHTML = count
}
