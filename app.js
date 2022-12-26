const navSlide = () => {
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links"); 
    const navLinks = document.querySelectorAll(".nav-links li"); 
    const colors = ["pink", "white"]; 

    let index = 0; 

    // Toggle nav
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active"); 
        burger.style.backgroundColor = colors[index]; 

        index = index >= colors.length -1 ? 0 : index +1; 


    });
    
    //Animate Links
    navLinks.forEach((link, index) => {
        link.style.animation = "navLinkFade 0.5s ease forwards ${index / 7 +2}s";
        console.log(index / 7); 
    });
}

function burgerColor() {
    
}


navSlide(); 
burgerColor(); 

