// Skriv en funktion som inte tar något argument och genererar ett random tal mellan 0 och 5

console.log(generateRandom())

function generateRandom() {
    return Math.floor(Math.random() * (5 - 0 + 1)) + 0
}