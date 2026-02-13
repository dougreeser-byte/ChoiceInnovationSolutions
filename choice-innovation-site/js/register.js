document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const entry = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        business: document.getElementById("business").value,
        service: document.getElementById("service").value
    };

    let data = JSON.parse(localStorage.getItem("registrations")) || [];
    data.push(entry);
    localStorage.setItem("registrations", JSON.stringify(data));

    document.getElementById("successMessage").innerText = "Registration saved!";
});
