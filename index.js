/* Counter Project */
var numPeople = 0
let counter = document.getElementById("count-el")
let addButton = document.getElementById("increment-btn")

updateDisplay()

function increment() {
    numPeople++
    updateDisplay()
}

function reset() {
    numPeople = 0
    updateDisplay()
}

function updateDisplay() {
    counter.innerText = numPeople
    console.log(numPeople)
}
