/*gsap.to("#nav", {
    BackgroudColor : "#004",
    height:"130px"
    duration:0.5,
    delay:1,
    scrollTrigger:{
        trigger:"#nav"
        scroller:"body"
        markers:true
    }
})*/







gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 2,
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      //markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    }})