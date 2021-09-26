
gsap.registerPlugin(ScrollTrigger);

gsap.from('.navbar-brand' , {
    //scrollTrigger: '.logo',
    x: 500,
    duration:.3,
    ease: 'power4'
});

gsap.from('.jumbotron' ,  {
    opacity:0,
    duration:.3,
    delay: .25,
    //stagger:.5
});

gsap.to('.gallery', {
    scrollTrigger: {
        trigger: '.gallery',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub:1,
        markers:true,
    },
    rotation:360,
    duration:.5,
    stagger:.25
    //ease: 'power4'
});

gsap.from('.row1' ,  {
    scrollTrigger: {
        trigger: '.row1',
        start: 'top 80%',
        end: 'bottom 20%',
        markers:true,
    },
    opacity:0,
    duration:.3,
    //stagger:.5
});
