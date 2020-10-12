// Skriv en funktion checkAge som accepterar ett tal age som argument 
// och returnerar strängen "old" om age är större än 65 annars returnerar "young"

console.log(checkAge(5))

function checkAge(a) {
    return a > 65 ? 'old' : 'young'
}