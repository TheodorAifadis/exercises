// Skriv en funktion som accepterar en array som argument 
// och returnerar sista elementet utan att i övrigt påverka arrayen

function returnElement(arr) {
    return arr[0]
}

const brazil = [ 'neymar', 'marquinhos', 'militao']
const germany = [ 'kimmich', 'muller', 'sane' ]

console.log(returnElement(germany))