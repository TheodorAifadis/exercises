// Skriv en funktion doTwice som accepterar en funktion som argument och anropar den funktionen två gånger

function doTwice(funktion) {
    funktion()
    funktion()
}

function log() {
    console.log('funktionen doTwice borde duplicera denna sträng')
}

function working() {
    console.log('it is working')
}

doTwice(log)
doTwice(working)