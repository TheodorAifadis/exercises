// Skriv en funktion addFoo som accepterar en array 
// och lägger till ett nytt element "Foo" som sista element i arrayen och returnerar ingenting

function addFoo(arr) {
    arr.push('Foo')
}

let tings = ['boll', 'troll', 'koll']

addFoo(tings)

console.log(tings)