const form = document.getElementById("login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const Firstname = document.getElementById("firstname").value.trim();
    const Lastname = document.getElementById("lastname").value.trim();
    const Emailid = document.getElementById("mailid").value.trim();
    const Password = document.getElementById("pass").value;
    const Confirmpassword = document.getElementById("confirmpass").value;
    const notify = document.getElementById("notify");

    const nameReg = /^[A-Z][a-z]+$/;
    const mailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameReg.test(Firstname) || !nameReg.test(Lastname)) {
        notify.textContent = "Enter valid first and last name";
        notify.style.color = "red";
        return;
    }

    if (!mailReg.test(Emailid)) {
        notify.textContent = "Enter valid email id";
        notify.style.color = "red";
        return;
    }

    if (Password !== Confirmpassword) {
        notify.textContent = "Password not matching";
        notify.style.color = "red";
        return;
    }

    notify.textContent = "Registration successful!";
    notify.style.color = "green";
});


