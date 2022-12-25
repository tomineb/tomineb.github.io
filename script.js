
const mainAbt = document.getElementById("main-about")
const abt = document.getElementById("about")

const mainProjects = document.getElementById("main-projects")
const projects = document.getElementById("projects")
const mainContact = document.getElementById("main-contact")
const contact = document.getElementById("contact")


// the code below could have been done WAY easier. 
// anyhow .. 

function makeVisible() {
    var setDisplay = abt.style.display; 

    if (setDisplay == "none") {
        abt.style.display = "block"; 
    }
    
    else if (setDisplay == "block") {
        abt.style.display = "none"; 
    }

    
    else {
        abt.style.display = "block"; 
    }
} 

function makeVisibleTwo() {
     var setDisplay = projects.style.display; 
 
     if (setDisplay == "none") {
         projects.style.display = "block"; 
     }
     
    else if (setDisplay == "block") {
         projects.style.display = "none"; 
     }

     else {
         projects.style.display = "block"; 
     }
     
 } 

 function makeVisibleThree() {
     var setDisplay = contact.style.display; 
 
     if (setDisplay == "none") {
         contact.style.display = "block"; 
     }
     
     else if (setDisplay == "block") {
         contact.style.display = "none"; 
     }
 
     
     else {
         contact.style.display = "block"; 
     }
 } 

mainAbt.onclick(makeVisible());
mainProjects.onclick(makeVisibleTwo());
mainContact.onclick(makeVisibleThree()); 




