const clouds=document.querySelectorAll('.cloud'),
      birds=document.querySelector('.birds'),
     sun=document.querySelector('.sun'),
     river=document.querySelector('.river');
console.log(clouds);
window.addEventListener('scroll',()=> {
    console.log(scrollY);
    let windowY=this.scrollY
    clouds.forEach(cloud =>{
        let speed=cloud.getAttribute('speed')
        cloud.style.transform=`translateX(${windowY*speed/5}px)`
    });
    sun.style.transform=`translate(${windowY/3}px,${windowY/5}px)`
    let speed2=birds.getAttribute('speed')
    birds.style.transform=`translate(${windowY*speed2/8}px,${windowY/6}px)`
    river.style.transform=`translateX(${windowY/20}px)`
})