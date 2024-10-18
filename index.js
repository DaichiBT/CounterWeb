/* Counter Project */
var numPeople = 0;
var totalPeople = 0;
let counter = document.getElementById("count-el");
let savedEntries = document.getElementById("saved-entries");
let totalCounter = document.getElementById("total-count-el");

updateDisplay();

function increment() {
    numPeople++;
    totalPeople++;
    animateCounter();
    updateDisplay();
}

function reset() {
    numPeople = 0;
    updateDisplay();
}

function updateDisplay() {
    counter.innerText = numPeople;
    totalCounter.innerText = totalPeople;
}

function save() {
    let countStr = numPeople + " - ";
    savedEntries.textContent += countStr;
}

function animateCounter() {
    counter.classList.add("pop");
    setTimeout(function() {
        counter.classList.remove("pop");
    }, 200);
}
