const form = document.getElementById("registrationForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const branch = document.getElementById("branch").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    const message = document.getElementById("message");

    // Name validation
    const namePattern = /^[A-Za-z ]{3,}$/;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Mobile validation
    const mobilePattern = /^[0-9]{10}$/;

    // Password validation
    const passwordPattern = /^.{6,}$/;


    // Name
    if (!namePattern.test(name)) {

        message.style.color = "red";
        message.innerHTML = "Invalid Name";
        return;
    }


    // Email
    if (!emailPattern.test(email)) {

        message.style.color = "red";
        message.innerHTML = "Invalid Email";
        return;
    }


    // Mobile
    if (!mobilePattern.test(mobile)) {

        message.style.color = "red";
        message.innerHTML = "Invalid Mobile Number";
        return;
    }


    // Branch
    if (branch === "") {

        message.style.color = "red";
        message.innerHTML = "Select Branch";
        return;
    }


    // Password
    if (!passwordPattern.test(password)) {

        message.style.color = "red";
        message.innerHTML = "Weak Password";
        return;
    }


    // Confirm password
    if (password !== confirm) {

        message.style.color = "red";
        message.innerHTML = "Passwords do not match";
        return;
    }


    // Student object
    const student = {
        name: name,
        email: email,
        mobile: mobile,
        branch: branch,
        password: password
    };


    try {

        // Send student data to Node.js server
        const response = await fetch("/register", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(student)

        });


        const result = await response.json();


        if (result.success) {

            message.style.color = "green";
            message.innerHTML = "Registration Successful";

            form.reset();

        } else {

            message.style.color = "red";
            message.innerHTML = result.message;

        }

    } catch (error) {

        console.error(error);

        message.style.color = "red";
        message.innerHTML =
            "Server error. Please try again.";

    }

});