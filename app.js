
function connectDevice() {
    document.getElementById("status").innerText = "Device Connected";
    logAction("Connected to simulated device.");
}

function simulateProgramming() {
    let vehicle = document.getElementById("vehicleSelect").value;
    if (vehicle === "None") {
        alert("Please select a vehicle.");
        return;
    }
    logAction("Programming key for " + vehicle + "...");
    setTimeout(() => {
        logAction("Key programmed successfully for " + vehicle + "!");
    }, 2000);
}

function logAction(message) {
    let log = document.getElementById("log");
    log.innerHTML += "<p>" + message + "</p>";
}
