document.getElementById("registrationData").innerText =
    JSON.stringify(JSON.parse(localStorage.getItem("registrations")) || [], null, 2);

document.getElementById("appointmentData").innerText =
    JSON.stringify(JSON.parse(localStorage.getItem("appointments")) || [], null, 2);
