
if(typeof gsap !== "undefined" &&
   typeof ScrollTrigger !== "undefined"){

    gsap.registerPlugin(ScrollTrigger);

}


/*==========================================================
Defaults
==========================================================*/
gsap.defaults({
    ease: "power3.out",
    duration: 1
});
/*==========================================================
Refresh
==========================================================*/
window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});
/*==========================================================
Hero Timeline
==========================================================*/
const heroTL = gsap.timeline({
    defaults:{
        ease:"power4.out"
    }
});
heroTL
.from(".hero-overlay",{
    opacity:0,
    duration:1.4
})
.from(".hero-subtitle",{
    y:40,
    opacity:0
},"-=1")
.from(".hero-title",{
    y:120,
    opacity:0,
    duration:1.2
},"-=.7")
.from(".hero-text",{
    y:40,
    opacity:0
},"-=.8")
.from(".hero-buttons",{
    y:30,
    opacity:0
},"-=.7")
.from(".weather-card",{
    x:100,
    opacity:0
},"-=.8")
.from(".hero-footer div",{
    y:30,
    opacity:0,
    stagger:.15
},"-=.6");
/*==========================================================
Floating Hero
==========================================================*/
if(document.querySelector(".hero-house")){
    gsap.to(".hero-house",{
    y:-20,
    duration:5,
    repeat:-1,
    yoyo:true,
    ease:"sine.inOut"
});
    }
gsap.to(".weather-card",{
    y:-12,
    duration:4,
    repeat:-1,
    yoyo:true,
    ease:"sine.inOut"
});
gsap.to(".floating-award",{
    y:-10,
    duration:4,
    repeat:-1,
    yoyo:true,
    ease:"sine.inOut"
});
/*==========================================================
Background Zoom
==========================================================*/
gsap.to(".hero-mountains",{
    scale:1.08,
    duration:30,
    ease:"none",
    repeat:-1,
    yoyo:true
});
/*==========================================================
Fog
==========================================================*/
gsap.to(".fog-one",{
    x:180,
    duration:28,
    repeat:-1,
    ease:"none"
});
gsap.to(".fog-two",{
    x:-220,
    duration:36,
    repeat:-1,
    ease:"none"
});
/*==========================================================
Scroll Indicator
==========================================================*/
gsap.to(".scroll-indicator span",{
    y:55,
    repeat:-1,
    duration:2,
    ease:"power1.inOut"
});
/*==========================================================
Header
==========================================================*/
ScrollTrigger.create({
    start:100,
    onUpdate:self=>{
        document
        .querySelector(".header")
        .classList
        .toggle("scrolled",self.scroll()>100);
    }
});
/*==========================================================
Generic Reveal
==========================================================*/
gsap.utils.toArray(".section-heading").forEach(section=>{
    gsap.from(section,{
        y:60,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:section,
            start:"top 80%"
        }
    });
});
/*==========================================================
Editorial About
==========================================================*/
gsap.from(".editorial-images",{
    x:-100,
    opacity:0,
    duration:1.3,
    scrollTrigger:{
        trigger:".about-editorial",
        start:"top 70%"
    }
});
gsap.from(".editorial-content>*",{
    y:40,
    opacity:0,
    stagger:.15,
    scrollTrigger:{
        trigger:".editorial-content",
        start:"top 70%"
    }
});
/*==========================================================
Parallax Images
==========================================================*/
gsap.utils.toArray(".image-large img").forEach(image=>{
    gsap.to(image,{
        yPercent:12,
        ease:"none",
        scrollTrigger:{
            trigger:image,
            scrub:true
        }
    });
});
/*==========================================================
Journey Timeline
==========================================================*/
gsap.to(".journey-line span",{
    height:"100%",
    ease:"none",
    scrollTrigger:{
        trigger:".journey-wrapper",
        start:"top center",
        end:"bottom bottom",
        scrub:true
    }
});
gsap.utils.toArray(".journey-item").forEach(item=>{
    gsap.from(item,{
        y:120,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:item,
            start:"top 75%"
        }
    });
});
/*==========================================================
Cinema
==========================================================*/
gsap.to(".cinema-image img",{
    yPercent:18,
    ease:"none",
    scrollTrigger:{
        trigger:".cinema-section",
        start:"top bottom",
        end:"bottom top",
        scrub:true
    }
});
gsap.from(".cinema-content>*",{
    y:50,
    opacity:0,
    stagger:.15,
    scrollTrigger:{
        trigger:".cinema-content",
        start:"top 75%"
    }
});
/*==========================================================
Rooms
==========================================================*/
gsap.utils.toArray(".room-showcase").forEach(section=>{
    gsap.from(section.querySelector(".room-image"),{
        x:-120,
        opacity:0,
        duration:1.2,
        scrollTrigger:{
            trigger:section,
            start:"top 70%"
        }
    });
    gsap.from(section.querySelector(".room-content"),{
        x:120,
        opacity:0,
        duration:1.2,
        scrollTrigger:{
            trigger:section,
            start:"top 70%"
        }
    });
});
/*==========================================================
Room Image Parallax
==========================================================*/
gsap.utils.toArray(".room-image img").forEach(image=>{
    gsap.to(image,{
        yPercent:10,
        ease:"none",
        scrollTrigger:{
            trigger:image,
            scrub:true
        }
    });
});
/*==========================================================
Hover Lift
==========================================================*/
document.querySelectorAll(
".room-showcase,.event-item,.experience-box"
).forEach(card=>{
    card.addEventListener("mouseenter",()=>{
        gsap.to(card,{
            y:-10,
            duration:.35
        });
    });
    card.addEventListener("mouseleave",()=>{
        gsap.to(card,{
            y:0,
            duration:.35
        });
    });
});
/*==========================================================
HIGHFIELD HOLIDAY HOME
GSAP ANIMATIONS
Part 2
==========================================================*/
/*==========================================================
Dining
==========================================================*/
gsap.from(".dining-content > *", {
    y: 60,
    opacity: 0,
    stagger: 0.12,
    duration: 1,
    scrollTrigger: {
        trigger: ".dining-editorial",
        start: "top 70%"
    }
});
gsap.from(".main-food", {
    x: 120,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".dining-editorial",
        start: "top 70%"
    }
});
gsap.from(".floating-food", {
    y: 80,
    opacity: 0,
    duration: 1.1,
    delay: .2,
    scrollTrigger: {
        trigger: ".dining-editorial",
        start: "top 70%"
    }
});
/* Floating food */
gsap.to(".floating-food", {
    y: -15,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});
/*==========================================================
Experiences
==========================================================*/
gsap.utils.toArray(".experience-box").forEach((card, index) => {
    gsap.from(card, {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: index * 0.08,
        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        }
    });
});
/*==========================================================
Events
==========================================================*/
gsap.from(".event-item", {
    y: 100,
    opacity: 0,
    stagger: .2,
    duration: 1,
    scrollTrigger: {
        trigger: ".events-editorial",
        start: "top 75%"
    }
});
/*==========================================================
Gallery
==========================================================*/
gsap.utils.toArray(".gallery-item").forEach((item, i) => {
    gsap.from(item, {
        scale: .92,
        opacity: 0,
        y: 50,
        duration: .9,
        delay: i * .05,
        scrollTrigger: {
            trigger: item,
            start: "top 90%"
        }
    });
});
/*==========================================================
Testimonials
==========================================================*/
gsap.from(".testimonial-card", {
    y: 80,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".testimonial-editorial",
        start: "top 75%"
    }
});
/*==========================================================
Location
==========================================================*/
gsap.from(".location-info", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".location-section",
        start: "top 70%"
    }
});
gsap.from(".location-map", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".location-section",
        start: "top 70%"
    }
});
/*==========================================================
Booking CTA
==========================================================*/
gsap.to(".booking-bg img", {
    scale: 1.15,
    ease: "none",
    scrollTrigger: {
        trigger: ".booking-cta",
        scrub: true
    }
});
gsap.from(".booking-content > *", {
    y: 50,
    opacity: 0,
    stagger: .12,
    scrollTrigger: {
        trigger: ".booking-content",
        start: "top 75%"
    }
});
/*==========================================================
Footer
==========================================================*/
gsap.from(".footer-grid > div", {
    y: 60,
    opacity: 0,
    stagger: .15,
    duration: 1,
    scrollTrigger: {
        trigger: ".footer",
        start: "top 85%"
    }
});
/*==========================================================
Counters
==========================================================*/
document.querySelectorAll(".counter").forEach(counter => {
    const target = +counter.dataset.count;
    ScrollTrigger.create({
        trigger: counter,
        start: "top 85%",
        once: true,
        onEnter: () => {
            gsap.to(counter, {
                textContent: target,
                duration: 2,
                snap: { textContent: 1 },
                ease: "power1.out"
            });
        }
    });
});
/*==========================================================
Mouse Parallax
==========================================================*/
const heroSection = document.querySelector(".hero");
if(heroSection){
hero.addEventListener("mousemove",(e)=>{
    const x=(e.clientX/window.innerWidth)-0.5;
    const y=(e.clientY/window.innerHeight)-0.5;
    gsap.to(".hero-house",{
        x:x*25,
        y:y*15,
        duration:1.5
    });
    gsap.to(".hero-mountains",{
        x:x*12,
        y:y*8,
        duration:2
    });
});
}
/*==========================================================
Magnetic Buttons
==========================================================*/
document.querySelectorAll(".btn-primary,.btn-secondary,.btn-book").forEach(btn=>{
btn.addEventListener("mousemove",(e)=>{
    const rect=btn.getBoundingClientRect();
    const x=e.clientX-rect.left-rect.width/2;
    const y=e.clientY-rect.top-rect.height/2;
    gsap.to(btn,{
        x:x*.18,
        y:y*.18,
        duration:.35
    });
});
btn.addEventListener("mouseleave",()=>{
    gsap.to(btn,{
        x:0,
        y:0,
        duration:.4
    });
});
});
/*==========================================================
Reveal Images
==========================================================*/
gsap.utils.toArray(".image-mask").forEach(mask=>{
    const img=mask.querySelector("img");
    if(!img) return;
    gsap.from(img,{
        scale:1.25,
        duration:1.6,
        ease:"power3.out",
        scrollTrigger:{
            trigger:mask,
            start:"top 85%"
        }
    });
});
/*==========================================================
Fade Utility
==========================================================*/
gsap.utils.toArray("[data-fade]").forEach(el=>{
    gsap.from(el,{
        opacity:0,
        y:40,
        duration:.9,
        scrollTrigger:{
            trigger:el,
            start:"top 85%"
        }
    });
});
/*==========================================================
Section Parallax
==========================================================*/
gsap.utils.toArray("section").forEach(section=>{
    const bg=section.querySelector("img");
    if(!bg) return;
    gsap.to(bg,{
        yPercent:8,
        ease:"none",
        scrollTrigger:{
            trigger:section,
            scrub:true
        }
    });
});
/*==========================================================
Refresh
==========================================================*/
window.addEventListener("resize",()=>{
    ScrollTrigger.refresh();
});
/*==========================================================
End
==========================================================*/