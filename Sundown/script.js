let tl = gsap.timeline();

tl.from("#nav .nav ",{
    y: "-100%",
    opacity: 0,
    duration: 0.5,
    stagger: 0.6
})

tl.from(".slogan h1",{
    y: "100%",
    duration: 0.5,
    opacity: 0,
    stagger: 0.3,
    markers:true
})

tl.from(".container .bubble",{
    y: "-100%",
    scale: 0,
    opacity: 0,
    duration: 0.8
})

tl.from(".panel img , .panel div ", {
    x: "-100%",
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".panel",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 0.5,
    }
})

tl.from(".page2 div h1 ",{
    y: "100%",
    duration: 0.8,
    scrollTrigger: {
        trigger: ".page2 div",
        scroller: "body",
        start: "top 50%",
        end: "top 30%",
        scrub: 0.5
    }
})

gsap.from(".page2 .info div",{
    y: "100%",
    duration: 0.5,
    scrollTrigger :{
        trigger: ".page2 .info",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 0.5
    }
})

tl.from(".page3 div h1",{
    y: "100%",
    duration: 0.8,
    scrollTrigger: {
        trigger: ".page3 div",
        scroller: "body",
        start: "top 40%",
        end: "top 30%",
        scrub: 0.5
    }
})

gsap.from(".page3 .info div",{
    y: "100%",
    duration: 0.5,
    scrollTrigger :{
        trigger: ".page3 .info",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 0.5
    }
})

tl.from(".page4 div h1",{
    y: "100%",
    duration: 0.8,
    scrollTrigger: {
        trigger: ".page4 div",
        scroller: "body",
        start: "top 30%",
        end: "top 10%",
        scrub: 0.5
    }
})

gsap.from(".page4 .info div",{
    y: "100%",
    duration: 0.5,
    scrollTrigger :{
        trigger: ".page4 .info",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 0.5
    }
})

tl.from(".workpanel div",{
    y: "100%",
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".workpanel",
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
        scrub: 0.5,
    }
})

tl.from(".wrap h3",{
    x: "100%",
    opacity: 0,
    duration: 0.5,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".workpanel",
        scroller: "body",
        start: "bottom 10%",
        end: "bottom 0%",
        scrub: 0.5
    }
})

gsap.from("#footer h1",{
    x: "-200%",
    duration: 1,
    scrollTrigger: {
        trigger: ".workpanel",
        scroller: "body",
        start: "bottom 10%",
        end: "bottom 0%",
        scrub: 0.5
    }
})