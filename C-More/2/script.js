// Skriv en funktion som accepterar en array som argument och byter ut sista elementet mot strängen "virus"

function borre(arr) {
    arr[arr.length - 1] = 'virus'
}

const brazil = ['gabriel', 'vinicius', 'ronaldo']
const germany = ['joshua', 'jerome', 'leroy']

borre(brazil)

console.log(brazil)