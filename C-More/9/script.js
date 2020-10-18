// Skriv en funktion wordCount som returnerar antalet ord i en sträng

function wordCount(str) {
    console.log(str.split(' ').length)
}

const string = 'kan inte komma på något intressant att skriva men denna sträng borde vara 16 ord lång'

wordCount(string)