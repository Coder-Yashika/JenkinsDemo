const form=document.getElementById("registrationForm");

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const mobile=document.getElementById("mobile").value.trim();
const branch=document.getElementById("branch").value;
const password=document.getElementById("password").value;
const confirm=document.getElementById("confirmPassword").value;

const message=document.getElementById("message");

const namePattern=/^[A-Za-z ]{3,}$/;
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobilePattern=/^[0-9]{10}$/;
const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

if(!namePattern.test(name)){
message.style.color="red";
message.innerHTML="Invalid Name";
return;
}

if(!emailPattern.test(email)){
message.style.color="red";
message.innerHTML="Invalid Email";
return;
}

if(!mobilePattern.test(mobile)){
message.style.color="red";
message.innerHTML="Invalid Mobile Number";
return;
}

if(branch==""){
message.style.color="red";
message.innerHTML="Select Branch";
return;
}

if(!passwordPattern.test(password)){
message.style.color="red";
message.innerHTML="Weak Password";
return;
}

if(password!==confirm){
message.style.color="red";
message.innerHTML="Passwords do not match";
return;
}

const student={
name,
email,
mobile,
branch
};

let students=JSON.parse(localStorage.getItem("students"))||[];

students.push(student);

localStorage.setItem("students",JSON.stringify(students));

message.style.color="green";
message.innerHTML="Registration Successful";

form.reset();

});