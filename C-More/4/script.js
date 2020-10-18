// Skapa en funktion isSameUser som accepterar två person-objekt som argument 
// och returnerar true ifall deras property email är samma annars false

function isSameUser(user1, user2) {
    return user1.email === user2.email
}

const me = {
    name: 'theo',
    email: 'theo@gmail.com'
}

const friend = {
    name: 'john',
    email: 'john@gmail.com'
}

console.log(isSameUser(me, friend))