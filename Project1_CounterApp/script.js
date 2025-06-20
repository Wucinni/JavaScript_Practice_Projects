

function incrementCounter() {
    let counterElement = document.getElementById("counter");
    let counterValue = parseInt(document.getElementById("counter").innerText, 10) + 1;
    counterElement.innerText = counterValue
    localStorage.setItem("counterTemp", counterValue);
    console.log("Incremented value and temporary");
}

function saveCountValue() {
    let counterValue = document.getElementById("counter").innerText;
    localStorage.setItem("counter", counterValue);
    console.log("Saved permanent value");
}

function initializeCounterFromLocalStorage() {
    let counterElement = document.getElementById("counter");
    counterElement.innerText = localStorage.getItem("counter");
    localStorage.setItem("counterTemp", localStorage.getItem("counter"));
    console.log("Initialized from permanent value");
}

function resetCounterValue() {
    let counterElement = document.getElementById("counter");
    counterElement.innerText = 0;
    localStorage.setItem("counter", 0);
    localStorage.setItem("counterTemp", 0);
    console.log("Reset all values by button");
}

function refreshFromLocalStorage() {
    let counterElement = document.getElementById("counter");
    counterElement.innerText = localStorage.getItem("counterTemp");
    console.log("Refreshed from temporary value");
}

document.addEventListener("DOMContentLoaded", function() {
    initializeCounterFromLocalStorage();
    setInterval(refreshFromLocalStorage, 500);
});

window.addEventListener('beforeunload', function(event) {
    localStorage.setItem("counterTemp", 0);
});