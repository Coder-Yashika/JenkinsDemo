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
if(fs.existsSync("studentjson")){
     console.log("T C-03 :studentjson exists :PASS");
}
else{
    console.log("T C-03 :studentjson exists :FAIL");
    passed =false;
}
const students =JSON.parse(fs.readFileSyntnc("student.json"));
const student=studnents[0];

if(fs.existsSync("style.css")){
     console.log("T C-04 :style.css exists :PASS");
}
else{
    console.log("T C-04 :style.css exists :FAIL");
    passed =false;
}