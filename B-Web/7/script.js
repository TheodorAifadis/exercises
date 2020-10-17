// Gör så att det hela tiden kommer upp en prompt som frågar om ett lösenord, 
// och som fortsätter komma upp i all oändlighet så länge du inte skriver in rätt lösenord.

let userInput = prompt('Vem där?')

while(userInput !== 'Theo'){
    userInput = prompt('Inkorrekt, försök igen.')
}

if (userInput == 'Theo'){
    alert('Välkommen!')
}