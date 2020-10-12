// Skriv en funktion checkAge som accepterar ett tal age som argument 
// och returnerar strängen "old" om age är större än 65 annars returnerar "young"

console.log(checkAge(70))

function checkAge(age) {
    if (age > 65) {
        return 'old'
    } else {
        return 'young'
    }
}
