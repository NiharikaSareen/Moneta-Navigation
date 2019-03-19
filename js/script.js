const primaryNavButton = document.querySelector("#nav-primarybtn");
const pagetabhead = document.querySelector("#tab-head");

primaryNavButton.addEventListener("click", function(event) {
    const classActive = document.getElementById("nav-primary");
      classActive.classList.toggle("nav-light");
$('.toggle-content').toggle('is-hidden');

});

pagetabhead.addEventListener("click", function(event) {
    const classActive = document.getElementById("tab-head");
      classActive.classList.toggle("nav-light");
});