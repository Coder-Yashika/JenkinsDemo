const fs = require("fs");
let passed =true;

console.log("Registration Test \n");
if(fs.existsSync ("index.html")){
    console.log("T C-01 :index.html exists :PASS");
}
else{
    console.log("T C-01 :index.html exists :FAIL");
    passed =false;
}

if(fs.existsSync("script.js")){
     console.log("T C-02 :scirpt.js exists :PASS");
}
else{
    console.log("T C-02 :script.js exists :FAIL");
    passed =false;
}
if(fs.existsSync("student.json")){
     console.log("T C-03 :studentjson exists :PASS");
}
else{
    console.log("T C-03 :studentjson exists :FAIL");
    passed =false;
}
const students =JSON.parse(fs.readFileSync("student.json"));
const student=students[0];

if(fs.existsSync("style.css")){
     console.log("T C-04 :style.css exists :PASS");
}
else{
    console.log("T C-04 :style.css exists :FAIL");
    passed =false;
}


if(student.name.trim()!==""){
     console.log("T C-05 :Name Validation :PASS");
}
else{
    console.log("T C-05 :Name Validation :FAIL");
    passed =false;
}

if(student.email.includes("@")){
     console.log("T C-06 :Email Validation :PASS");
}
else{
    console.log("T C-06 :Email Validation :FAIL");
    passed =false;
}

if(student.mobile.length===10){
     console.log("T C-07 :Mobile Validation :PASS");
}
else{
    console.log("T C-07 :Mobile Validation :FAIL");
    passed =false;
}

if(student.branch!==""){
     console.log("T C-08 :Branch Validation :PASS");
}
else{
    console.log("T C-08 :Branch Validation :FAIL");
    passed =false;
}

if(student.password.length>=6){
     console.log("T C-09 :Password Validation :PASS");
}
else{
    console.log("T C-09 :Password Validation :FAIL");
    passed =false;
}

if(passed){
     console.log("T C-10 :Registration Sccessfull :PASS");
      console.log("\nBuild SUCCESS");
      process.exit(0);
}
else{
    console.log("T C-10 :all test Cases :FAIL");
    passed =false;
}