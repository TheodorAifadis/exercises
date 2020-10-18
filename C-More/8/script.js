// Skriv en funktion som accepterar en array av person-objekt med properties firstName och lastName 
// och som returnerar en array av deras fulla namn (förnamn och efternamn) som strängar

function testFunction(arr){
    return arr.map(function(p) {
        return p.firstName + ' ' + p.lastName
    })
}

const peeps = [
 
    {
        firstName: 'Gabriel',
        lastName: 'Jesus'
    },

    {
        firstName: 'Anderson',
        lastName: 'Talisca'
    }
]

console.log(testFunction(peeps))