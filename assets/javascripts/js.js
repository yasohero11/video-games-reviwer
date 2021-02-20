nav =document.getElementsByClassName("navbar-brand")

ulItems = document.getElementsByClassName("navbar-nav")

console.log(nav)


const tl =  new TimelineMax();

tl.fromTo(nav,1.2,{opacity:0,x:30},{opacity:1 , x:0} )


.fromTo(ulItems,.6 ,{opacity:0,x:30},{opacity:1 , x:0} , "-=0.5")

