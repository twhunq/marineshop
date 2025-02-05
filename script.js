let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}
const allLinks = document.querySelectorAll("a");

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!document.startViewTransition) {
      setActiveItem(event.target);
      return;
    }

    document.startViewTransition(() => setActiveItem(event.target));
  });
});

function setActiveItem(element) {
  allLinks.forEach((link) => link.classList.remove("active"));
  element.classList.add("active");
}