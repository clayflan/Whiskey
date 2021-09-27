
gsap.registerPlugin(ScrollTrigger);

/* const tl = gsap.timeline( { 
   
    scrollTrigger: {
      trigger: "team",
      start: "top 80%",
      end: "bottom 30%",
      scrub: true,
      markers: true,
      toggleActions: "play reverse play reverse",
    }
    
  });

  tl.to ('.team', {
    opacity:1,
    duration:2,
    stagger:.5
  }) */

gsap.from('.navbar-brand' , {
    //scrollTrigger: '.logo',
    x: 500,
    duration:.3,
    ease: 'power4'
});

gsap.from('.jumbotron' ,  {
    opacity:0,
    duration:.1,
    delay: .25,
    //stagger:.5
});

gsap.to('.gallery', {
    scrollTrigger: {
        trigger: '.gallery',
        start: 'top 80%',
        end: 'top 40%',
        scrub:1,
        markers:true,
    },
    rotation:360,
    duration:3,
    stagger:.25
    //ease: 'power4'
});

gsap.set('.team', {
    opacity: 0
  })

gsap.to('.team' ,  {
    scrollTrigger: {
        trigger: '.team',
        start: 'top 70%',
        end: 'top 50%',
        markers:true,
        scrub: true,
        toggleActions: "play reverse play reverse",
    },
    opacity:1,
    duration:1,
    stagger:.15
});
