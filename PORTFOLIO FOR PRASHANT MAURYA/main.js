var typed = new Typed(".text", {
    strings:["Frontend Developer..","Web Developer.."],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}