// $(document).ready(function(){
//     $('navbar .menu li a').click(function(){
//     });
//     $('.menu-btn').click(function(){
//         $('navbar .menu').toggleClass("active");
//         $('.menu-btn img').toggleClass("active");
//     });
// });
// $(document).ready(function() {
//     $('#toggleBtn').click(function() {
//         $('#sidebar').toggleClass('active');
//     });
// });


// menu = document.querySelector(".menu-btn");
// menu.onlick = function(){
//     navBar = document.querySelector(".navbar");
//     navBar.classlist.toggle("active");
// }


// function myFunction() {
//     var x = document.getElementById("sidebar");
//     if (x.className === "menu") {
//       x.className += " responsive";
//     } else {
//       x.className = "menu";
//     }
//   }


// function myFunction() {
//   document.getElementById("sidebar").classList.toggle("show");
// }
// window.onclick = function(event) {
//   if (!event.target.matches('.menu-btn')) {
//     var dropdowns = document.getElementsByClassName("menu");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

// const hamburgerToggle = document.querySelector("#hamburger-toggle");
// const navbar = document.querySelector("#navbar");

// hamburgerToggle.addEventListener("click", onHamburgerClick);

// function onHamburgerClick() {
//     if (!navbar.classList.contains("open")) {
//         navbar.classList.add("open");
//     } else {
//         navbar.classList.remove("open");
//     }
// }

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    hamburger.classList.toggle('active');
});
