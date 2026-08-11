const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = 3000;

const DATA_FILE = path.join(__dirname, "student.json");

app.use(express.json());

app.use(express.static(__dirname));


app.post("/register", (req, res) => {

    console.log("Registration request received");
    console.log(req.body);

    const student = req.body;

    // Check required fields
    if (
        !student.name ||
        !student.email ||
        !student.mobile ||
        !student.branch ||
        !student.password
    ) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    try {

        let students = [];

        // Check if student.json exists
        if (fs.existsSync(DATA_FILE)) {

            const data = fs.readFileSync(DATA_FILE, "utf8");

            if (data.trim() !== "") {

                students = JSON.parse(data);

            }
        }

        // Add new student
        students.push(student);

        // Write updated data
        fs.writeFileSync(
            DATA_FILE,
            JSON.stringify(students, null, 4),
            "utf8"
        );

        console.log("Student saved successfully!");

        res.json({
            success: true,
            message: "Registration successful"
        });

    } catch (error) {

        console.error("ERROR:", error);

        res.status(500).json({
            success: false,
            message: "Could not save student: " + error.message
        });
    }
});


app.listen(PORT, () => {

    console.log("================================");
    console.log("Server running successfully");
    console.log("http://localhost:3000");
    console.log("================================");

});