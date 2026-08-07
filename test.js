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