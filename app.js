
function scanVIN() {
  const vin = prompt("Simulated VIN Scanner:\nScan complete!");
  if (vin) document.getElementById("vin").value = vin.toUpperCase();
}

const models = {
  nissan: ["Altima (2015)", "Maxima (2018)", "Sentra (2020)"],
  dodge: ["Charger (2017)", "Challenger (2020)", "Durango (2016)"],
  ford: ["Focus (2014)", "F-150 (2019)", "Escape (2017)"],
  toyota: ["Camry (2015)", "Corolla (2018)", "RAV4 (2020)"],
  honda: ["Civic (2016)", "Accord (2019)", "CR-V (2017)"]
};

function loadModels() {
  const brand = document.getElementById("brand").value;
  const modelDropdown = document.getElementById("model");
  modelDropdown.innerHTML = "<option value=''>Select Model</option>";
  if (models[brand]) {
    models[brand].forEach(model => {
      const option = document.createElement("option");
      option.textContent = model;
      option.value = model;
      modelDropdown.appendChild(option);
    });
  }
}

function connectDevice() {
  const status = document.getElementById("status");
  status.textContent = "Connecting to OBD2 device...";
  setTimeout(() => {
    const success = Math.random() > 0.2;
    status.textContent = success ? "✅ OBD2 Device Connected" : "❌ Failed to Connect to OBD2 Device";
  }, 2000);
}

function programKey() {
  const status = document.getElementById("status");
  status.textContent = "🔍 Reading immobilizer...";
  setTimeout(() => {
    status.textContent = "🔐 Checking key status...";
    setTimeout(() => {
      status.textContent = "⚙️ Programming key...";
      setTimeout(() => {
        const success = Math.random() > 0.1;
        status.textContent = success ? "✅ Key Programmed Successfully" : "❌ Key Programming Failed";
      }, 2000);
    }, 2000);
  }, 2000);
}
