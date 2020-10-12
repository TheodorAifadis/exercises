// Skriv en funktion isLong som accepterar en string och returnerar true 
// ifall den är längre än 18 tecken annars false

console.log(isLong('hefjkhs'))

function isLong(lalala){
    return lalala.length > 18 ? "long" : "short";
}