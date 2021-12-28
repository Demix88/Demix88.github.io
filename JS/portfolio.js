//Open form function ,function that opens a "popup"form//
function openForm() {
    document.getElementById("myForm").style.display="block";
}

//Close form function, closes the "pop-up"a form//
function closeForm() {
    document.getElementById("myForm").style.display="none";
}
//Function to display image when the  page loads//
var slideIndex=1;
showSlides(slideIndex);

//function that changes slides when next or prev arrows are clicked//
function plusSlides(n) {
    showSlides(slideIndex+=n);
}

//changes slides when slide dots are selected//
function currentSlide(n) {
    showSlides(slideIndex=n);
}

function showSlides(n) {    
    var slides=document.getElementsByClassName("mySlides");  //stores all items in "myslides class in the array"//
    var dots=document.getElementsByClassName("dot"); //stores all "dot" class elements and stores them in the array "dots"//
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); 
    }
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
}
document.addEventListener("click",function(event) {
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") &&!event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
},false)
