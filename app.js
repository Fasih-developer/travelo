let parallex = document.querySelectorAll('.parallex');
let xvalue = 0, yvalue = 0;
window.addEventListener('mousemove',function (e) {
    xvalue = e.clientX - window.innerWidth /2;
    yvalue = e.clientY - window.innerHeight /2;
    parallex.forEach((el) =>{
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        
        let isleft = parseFloat(getComputedStyle(el).left) < window.innerWidth /2 ? 1 : -1;
        let zvalue =( e.clientX - parseFloat(getComputedStyle(el).left)) * isleft * 0.19;
    el.style.transform = `translate(calc(-50% + ${-xvalue * speedx + 'px'}), calc(-50% + ${-yvalue * speedy + 'px'}))
      perspective(4000px) translateZ(${zvalue * speedz + 'px'})`;
    })
})

let fogs = document.querySelectorAll('.fog');
fogs.forEach((fog) => {
  gsap.from(fog, {
    opacity:0,
    duration: 4,
    ease:'power3.inout',
  })
});
let tl = gsap.timeline();
gsap.from('.bg-img', {
  top:'200%',
    duration: 1,
  ease:'power3.inout',
})
gsap.from('.mountain_10', {
  top:'200%',
  ease:'power3.inout',
    opacity:0,
    duration: 1.6,
})
gsap.from('.mountain_9', {
  top:'270%',
  ease:'power3.inout',
    opacity:0,
    duration: 2,
})
gsap.from('.mountain_8', {
  top:'270%',
  ease:'power3.inout',
    opacity:0,
    duration: 2.5,
})
gsap.from('.mountain_7', {
  top:'270%',
  ease:'power3.inout',
    opacity:0,
    duration: 2.7,
})
gsap.from('.mountain_6', {
  top:'270%',
  ease:'power3.inout',
    opacity:0,
    duration: 3.1,
})
gsap.from('.mountain_5', {
  top:'270%',
  ease:'power3.inout',
    opacity:0,
    duration: 3.4,
})
gsap.from('.mountain_4', {
  top:'270%',
  ease:'power3.inout',
    opacity:0,
    duration: 3,
})
gsap.from('.mountain_3', {
  right:'-100%',
  ease:'power3.inout',
    opacity:0,
    duration: 2.5,
})
gsap.from('.mountain_2', {
  top:'270%',
  ease:'power3.inout',
    opacity:0,
    duration: 3.9,
})
gsap.from('.mountain_1', {
  left:'-100%',
  ease:'power3.inout',
    opacity:0,
    duration: 2,
})
gsap.from('.main-text h2', {
  marginTop:'-40vw',
    opacity:0,
    duration: 2,
  ease:'power2.inout',
})