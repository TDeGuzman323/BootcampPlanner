var today = new Date ();
var day = String(today.getDate()).padStart(2,"0");
var month = String(today.getMonth() + 1).padStart(2,"0");
var year = today.getFullYear();

today = month + "/" + day + "/" + year; 
document.write(today);