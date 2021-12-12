//Cloud scroll
let clouds = document.getElementsByClassName("cloud")[0]
let oldscroll = 0;
let scrollfloat = 0;


jQuery(document).ready(function(){

  window.addEventListener("scroll", (event) => {
    scrollfloat += this.scrollY;
    console.log(scrollfloat-oldscroll);
    oldscroll = scrollfloat
    $(".cloud").style.transform =  "translate(-100%, -100%);";
  });
  
  
});

//About me
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}