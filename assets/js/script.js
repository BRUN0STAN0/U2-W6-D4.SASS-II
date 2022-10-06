// let items = document.querySelectorAll('.list-group-item');

// items.forEach(item => {
//   item.addEventListener("click", function() {   
//    items.forEach(a=>{
//       a.classList.remove("active");
//     });
//      item.classList.add("active");
//   });  
// });



let navbarText = document.getElementById("navbarNav"); 
let navbarToggler = document.getElementsByClassName("navbar-toggler")[0];

navbarToggler.addEventListener("click", function() {
    navbarText.classList.toggle("collapse")
});
