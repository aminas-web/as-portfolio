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



/* nav buttons 
const navBtns = document.querySelectorAll('.nav-btn');

const sectionsTarget = document.querySelectorAll('.nav-target--js');
navBtns.forEach((item, index)=> {

    item.addEventListener('click', ()=>{
        sectionsTarget[index].scrollIntoView({behavior: 'smooth', block: 'start'})
    })
});

*/
const navPortfolio = document.querySelectorAll('.nav-portfolio');
const sectionPortfolio = document.querySelector('.section-portfolio');

navPortfolio.forEach((item)=>{
    
    item.addEventListener('click', ()=>{
        sectionPortfolio.scrollIntoView({behavior: 'smooth', block: 'start'})
    })
});

const navAbout = document.querySelectorAll('.nav-about');

navAbout.forEach((item) =>{

    item.addEventListener('click', ()=>{
        window.open('about.html', '_self');
    })
})


const navContact = document.querySelectorAll('.nav-contact');
const sectionContact = document.querySelector('.section-contact')
navContact.forEach((item) =>{

    item.addEventListener('click', ()=>{
        sectionContact.scrollIntoView({behavior: 'smooth', block: 'start'})
    })
}) 

const navProject = document.querySelectorAll('.nav-project');

navProject.forEach((item) =>{

    item.addEventListener('click', ()=>{
        window.open('project.html', '_self');
    })
})

/* logo reloads the page */
const logo = document.getElementById('logo');
logo.addEventListener('click', ()=>{
    window.location.reload()
})

/* gsap */

gsap.from('.gsap-nav', {
    opacity: 0, 
    duration: 1, 
    stagger: .2
})

gsap.from('.home-portrait', {
    x: 1000,
    ease: 'back', 
    opacity: 0,
    duration: 2
})

gsap.from('.homepage--text-container', {
    opacity: 0, 
    duration: .5, 
    y: 100,
    stagger: .3,
    delay: 1
})


gsap.registerPlugin(ScrollTrigger);

const tlScroll = gsap.timeline({
    scrollTrigger: {
    trigger: '.gsap-trigger',
    toggleActions: 'restart pause resume reset',
    scrub: 1,
    start: 'top 85%',
    end: 'bottom 20%'
},});

    tlScroll.from('.gsap-onScroll', { 
    duration: .3, 
    y: 100,
    stagger: .3,
    opacity: 0
})