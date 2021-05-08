const backToTop = document.getElementById('back-to-top')
const header = document.getElementById('welcome-section')

backToTop.addEventListener ("click", () => {
    window.scrollTo(0,0)
    header.focus()
})

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Now
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
        } 
     });

    // Burger Animation
     burger.classList.toggle('toggle')

    });
    
}

navSlide();