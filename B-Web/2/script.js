// Lägg till en paragraf med lite text under. Byt färg på paragrafen från JavaScript när du klickar på den.

let paragraf = document.getElementsByTagName("p")[0]

paragraf.addEventListener("click", function changeColor(){paragraf.style.color = "green"})