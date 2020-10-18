// Skapa en funktion isSameAge som accepterar två person-objekt som argument 
// och returnerar true ifall deras property age är samma annars false

function isSameAge(användare1, användare2) {
    return användare1.age === användare2.age
}

const jag = {
    namn: 'theo',
    ålder: 17
}

const kompis = {
    namn: 'john',
    ålder: 17
}

console.log(isSameAge(jag, kompis))