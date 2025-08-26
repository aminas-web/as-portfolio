/* sticky nav */
const navHeader = document.querySelector('header');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
navHeader.before(scrollWatcher)

const navObserver = new IntersectionObserver( (entries) => {
    console.log(entries)
    navHeader.classList.toggle('sticking', !entries[0].isIntersecting);

}, {rootMargin: '200px 0px 0px 0px'});

navObserver.observe(scrollWatcher)

/* logo reloads the page */
const logo = document.getElementById('logo');
logo.addEventListener('click', ()=>{
    window.open('index.html', '_self')
})

/* nav buttons */
const navPortfolio = document.querySelectorAll('.nav-portfolio');

navPortfolio.forEach((item) =>{

    item.addEventListener('click', ()=>{
        window.open('project.html', '_self');
    })
})


const navAbout = document.querySelectorAll('.nav-about');

navAbout.forEach((item) =>{

    item.addEventListener('click', ()=>{
        window.open('about.html', '_self');
    })
})

const navContact = document.querySelectorAll('.nav-contact');

navContact.forEach((item) =>{

    item.addEventListener('click', ()=>{
        window.location.reload()
    })
}) 

/* gsap */
gsap.from('.gsap-nav', {
    opacity: 0, 
    duration: 1, 
    stagger: .2
})


gsap.from('section', {
    opacity: 0,
    duration: .5,
    delay: .5
})
