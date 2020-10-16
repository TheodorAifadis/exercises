// Skriv en funktion isLagom som returnerar true ifall argumentet är 
// ett tal som är mellan 8 och 16 och annars returnerar false

function isLagom(x) {
    return 8 < x && x < 16
}

function isLagom2(x) {
    if (x > 16) {
        return false
    } else if (x < 8) {
        return false
    } else {
        return true
    }
}

console.log(isLagom(11))