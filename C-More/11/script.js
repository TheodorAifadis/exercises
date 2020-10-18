// Skriv en funktion doTwice som accepterar en funktion som argument och anropar den funktionen två gånger

function doTwice(funktion) {
    funktion()
    funktion()
}

function log() {
    console.log('funktionen doTwice borde duplicera denna sträng')
}

function funkar() {
    console.log('korrekt')
}

doTwice(log)
doTwice(funkar)