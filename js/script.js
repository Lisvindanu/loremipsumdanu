ScrollReveal().reveal(".header-text", { delay: 500 });
ScrollReveal().reveal(".header-text", { distance: "-50px" });
ScrollReveal().reveal(".hobbies-list", { delay: 1200 });
ScrollReveal().reveal(".hobbies-list", { distance: "-50px" });
ScrollReveal().reveal(".row", { delay: 1200 });
ScrollReveal().reveal(".row", { distance: "-50px" });

var sidemenu = document.getElementById("sidemenu");
function buka() {
  sidemenu.style.right = "0";
}

function tutup() {
  sidemenu.style.right = "-200px";
}
