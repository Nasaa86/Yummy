let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}

// Get a reference to the login form and close button
document.querySelector(".login-container").addEventListener("click", function(){
  document.querySelector(".login-input-container").style.display = "flex"
})

document.querySelector(".close").addEventListener("click", function(){
  document.querySelector(".login-input-container").style.display = "none";
})

// Get a reference to the signup form and close button
document.querySelector(".signup-container").addEventListener("click", function(){
  document.querySelector(".signup-form-container").style.display = "flex"
})

document.querySelector(".close-sign").addEventListener("click", function(){
  document.querySelector(".signup-form-container").style.display = "none";
})

// Cancel button
document.querySelector(".btn-cancel").addEventListener("click", function(){
  document.querySelector(".signup-form-container").style.display = "none";
})

// Sign up link in login form change to sign up form
document.querySelector(".sign-yet").addEventListener("click", function(){
  document.querySelector(".signup-form-container").style.display = "flex"
})

document.querySelector(".sign-yet").addEventListener("click", function(){
  document.querySelector(".login-input-container").style.display = "none";
})


// Menu navigation dropp and hide
document.querySelector(".nav-toggle").addEventListener("click", function(){
  document.querySelector(".nav").style.height = "22vh",
  document.querySelector(".nav-menu").style.visibility = "visible",
  document.querySelector(".nav-toggle").style.display = "none",
  document.querySelector(".nav-close").style.display= "flex";
})

document.querySelector(".nav-close").addEventListener("click", function(){
  document.querySelector(".nav").style.height = "8vh",
  document.querySelector(".nav-menu").style.visibility = "hidden",
  document.querySelector(".nav-close").style.display = "none",
  document.querySelector(".nav-toggle").style.display = "flex";
})



// const navMenu = document.getElementById('nav-menu'),
//       navToggle= document.getElementById('nav-toggle'),
//       navClose = document.getElementById('nav-close')


//     //   Menu Show
//     if(navToggle){
//         navToggle.addEventListener('click', () =>{
//             navMenu.classList.add('show-menu')
//         })
//     }

//     // Menu Hidden
//     if(navClose){
//         navClose.addEventListener('click', () =>{
//             navMenu.classList.remove('show-menu')
//         })
//     }


//     // REMOVE MENU MOBILE

// const navLink = document.querySelectorAll('.nav-link')

// const linkAction = () => {
//     const navMenu = document.getElementById('nav-menu')
//     // when we click on each nav-link, we remove show-menu 
//     navMenu.classList.remove('show-menu')
// }

// navLink.forEach(n => n.addEventListener('click', linkAction))
