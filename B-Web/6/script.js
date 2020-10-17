// Gör så att body:n byter bakgrundsfärg efter att besökaren varit 5 sekunder på sidan

setTimeout(function(){document.body.style.backgroundColor = 'purple'}, 5000)

const counter = document.getElementById('counter')

let count = 0

setInterval(function() {
    count++
    counter.innerHTML = count
}, 1000)