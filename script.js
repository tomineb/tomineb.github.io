
const abt = document.getElementById("main-about")
const mainAbt = document.getElementById("about")

function makeVisible() {
    var displaySetting = abt.style.display;  


    if (displaySetting == "block") {
        abt.style.display = "block"; 

    }

    else {
        abt.style.display == "block";  
    }
}
mainAbt.onclick(makeVisible()) 
