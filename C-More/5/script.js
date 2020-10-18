// Skapa en funktion filterOdds som accepterar en 
// array av tal som argument och som returnerar en ny array utan udda tal (odd)

function filterOdds(arr) {
    return arr.filter(function (num){
        return num % 2 === 0
    })
}

let numbers = [1, 2, 3, 4, 5, 6, 7]

console.log(filterOdds(numbers))