let tl = gsap.timeline();
gsap.set(".a",{ opacity:0, y:10})
gsap.set(".x",{ opacity:0, scale:1.6})
tl
.from(".left", {
    width:0,
    duration:1.5,
    ease: Expo.easInOut
})
.from(".right", {
    width:0,
    duration:1.5,
    ease: Expo.easInOut
})
.to(".a", {
    delay:-.5,
    stagger:.1,
    opacity:1,
    y:0,
    duration:1.5,
    ease: Expo.easInOut
})
.to(".x", {
    opacity:1,
    scale:1,
    duration:1,
    ease: Expo.easInOut
})
