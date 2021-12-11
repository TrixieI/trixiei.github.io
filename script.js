ScrollReveal().reveal('.grid' , {delay: 300 , reset: true});

ScrollReveal().reveal('.container2' , {delay: 300 , reset: true});

ScrollReveal().reveal('.m1' , {delay: 400 , reset: false});
ScrollReveal().reveal('.m2' , {delay: 1200 , reset: false});
ScrollReveal().reveal('.m3' , {delay: 1600 , reset: false});


function sMedia() {
    const show = document.getElementById("reveal");
    if (!show.style.display || show.style.display === "none") {
      show.style.display = "block";
    } else {
      show.style.display = "none";
    }
  }