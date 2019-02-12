var slideIndex = 1;
showSldes(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementByClassName("slides");
    var dots = doc.getElementByClassName("demo");

    if (n > slides.lenght) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.lenght;
    }

    for (i = 0; i < slides.lenght; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.lenght; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    container__text.innerHtml = dots[slideIndex-1].alt;
}