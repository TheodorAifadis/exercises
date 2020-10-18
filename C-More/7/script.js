// Skriv en funktion som accepterar en array av namn 
// t.ex. ["Klas", "Filip", "Maja", "..."] och som för varje namn loggar ut en hälsning till konsolen

function hello(names) {
    console.log('hello m8' + names)
}

function all(element) {
    element.forEach(hello)
}

const names = ['Klas', 'Filip', 'Maja']

all(names)