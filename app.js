
// // onload
// let loader;

// function load() {
//     loader = setTimeout( showPage, 1000);
    
// };
// function showPage() {
//     document.getElementById("page").style.display = "block";
//   };

// animation page
gsap.from("body", { duration: 2, opacity: 0});

// animation header
let timeline = gsap.timeline();
  timeline.from(".tittle", {x:100, opacity: 0, duration: 1})
          .from(".intro-btn", {y:100, opacity:0, ease:"back", duration:2})
          .from(".intro", {opacity: 0, duration: 2 });
  
// animation hero item
let tl = gsap.timeline({scrollTrigger:{
  trigger:"#dsb",
 
  start:"top 50%",
  end:"bottom top",
  toggleActions:"restart complete reverse reset"
}})
.from("#dsb", {opacity: 0, duration: 1 })
.from("#ch1", {y:100, opacity: 0, duration: 0.5})
.from("#ch2", {y:100, opacity: 0, duration: 0.5})
.from("#ch3", {y:100, opacity: 0, duration: 0.5})
.from("#ch4", {y:100, opacity: 0, duration: 0.5})
.from("#parm", {y:100, opacity:0, ease:"back", duration:1})


// animation feature item
let fm = gsap.timeline({scrollTrigger:{
            trigger:".main-container-feature",
            start:"top 50%",
            end:"bottom top",
            toggleActions:"restart complete reverse reset",
            
}})
.from(".feature-tittle", {opacity: 0, duration: 1, x: 100 })
.from(".feature-intro", {opacity: 0, duration: 1, x: 100 })
.from(".menu-1", {opacity: 0, duration: 1})
.from(".menu-2", {opacity: 0, duration: 1})
.from(".cta-ready-container", {opacity: 0, duration: 1})
.from(".cta-ready-tittle", {opacity: 0, duration: 1, x: 100 })
.from(".cta-ready-intro", {opacity: 0, duration: 1, x: 100 })
.from(".cta-ready-btn", {opacity: 0, duration: 1, y: 100, ease:"back" })

// animation how it work 
let hwi = gsap.timeline({scrollTrigger:{
        trigger:".hdwi-item1",
        start:"top 50%",
        end:"bottom top",
        toggleActions:"restart complete reverse reset",
        
}})
.from("#hdwi-item-tittle-1", {opacity: 0, duration: 1, x: 100 })
.from("#hdwi-item-intro-1", {opacity: 0, duration: 1, x: 100 })
.from(".rect-1", {opacity: 0, duration: 0.5})
.from("#clc", {opacity: 0, duration: 0.5, y: 100, ease:"back" })
.from("#cht-bx2", {opacity: 0, duration: 0.5, x: 100, ease:"back" })
.from("#cht-bx", {opacity: 0, duration: 0.5, x: 100, ease:"back" })

let hwi2 = gsap.timeline({scrollTrigger:{
    trigger:".hdwi-item2",
    start:"top 50%",
    end:"bottom top",
    toggleActions:"restart complete reverse reset",
    
}})
.from("#hdwi-item-tittle-2", {opacity: 0, duration: 1, x: 100 })
.from("#hdwi-item-intro-2", {opacity: 0, duration: 1, x: 100 })
.from(".rect-2", {opacity: 0, duration: 0.5})
.from("#ftr", {opacity: 0, duration: 0.5, y: 100, ease:"back" })
.from("#tkt", {opacity: 0, duration: 0.5, x: 100, ease:"back" })
.from("#prms", {opacity: 0, duration: 0.5, x: 100, ease:"back" })
.from("#cht-bx3", {opacity: 0, duration: 0.5, x: 100, ease:"back"})

let hwi3 = gsap.timeline({scrollTrigger:{
    trigger:".hdwi-item3",
    start:"top 50%",
    end:"bottom top",
    toggleActions:"restart complete reverse reset",
    
}})
.from("#hdwi-item-tittle-3", {opacity: 0, duration: 1, x: 100 })
.from("#hdwi-item-intro-3", {opacity: 0, duration: 1, x: 100 })
.from(".rect-3", {opacity: 0, duration: 0.5})
.from("#srch", {opacity: 0, duration: 0.5, y: 100, ease:"back" })
.from("#cht-bx4", {opacity: 0, duration: 0.5, x: 100, ease:"back"})

// animaton pricing
let pricing = gsap.timeline({scrollTrigger:{
    trigger:".pricing-container",
    start:"top 50%",
    end:"bottom top",
    toggleActions:"restart complete reverse reset",
    
}})
.from(".hdiw-tittle", {opacity: 0, duration: 1, x: 100 })
.from(".hdiw-intro", {opacity: 0, duration: 1, x: 100 })
.from(".pricing-item1", {opacity: 0, duration: 0.5})
.from("#prc-btn-1", {opacity: 0, duration: 0.5, y: 100, ease:"back"})
.from(".pricing-item2", {opacity: 0, duration: 0.5})
.from("#prc-btn-2", {opacity: 0, duration: 0.5, y: 100, ease:"back"})
.from(".pricing-item3", {opacity: 0, duration: 0.5})
.from("#prc-btn-3", {opacity: 0, duration: 0.5, y: 100, ease:"back"})
// animation cta pricing

let pricingCta = gsap.timeline({scrollTrigger:{
    trigger:".pricing-cta-container",
    start:"top 70%",
    end:"bottom top",
    toggleActions:"restart complete reverse reset",
    
}})
.from(".pricing-cta-wrapper", {opacity: 0, duration: 1})
.from(".pricing-cta-intro-tittle", {opacity: 0, duration: 1, x: 100 })
.from(".pricing-cta-intro-text", {opacity: 0, duration: 1, x: 100 })
.from(".pricing-btn-cta", {opacity: 0, duration: 1, y: 100, ease:"back" })