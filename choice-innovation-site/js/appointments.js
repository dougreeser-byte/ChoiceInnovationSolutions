document.getElementById("appointmentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const appointment = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value
    };

    let data = JSON.parse(localStorage.getItem("appointments")) || [];
    data.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(data));

    document.getElementById("appointmentMessage").innerText = "Appointment booked!";
});
