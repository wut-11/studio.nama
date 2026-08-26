const cursor = document.querySelector(".cursor");
const hero = document.querySelector(".hero");
const hero2 = document.querySelector(".hero2")
const point = document.querySelector(".pointer");
hero.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursor.style.transition = "linear 0.3s"
});

hero.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
    point.style.opacity = "0";

});

hero.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
    point.style.opacity = "1";
});

window.addEventListener("mousemove", (e) => {
    point.style.left = e.clientX + "px";
    point.style.top = e.clientY + "px";
    point.style.transition = "linear 0.1s"
});

const name = document.getElementById("name");


const fixed = document.querySelector(".fixed-menu")
const menuBtn = document.querySelector(".menu")
menuBtn.addEventListener("click",()=>{
  const isOpen = fixed.style.top ==="0%"
  fixed.style.top = isOpen?"-100%":"0%"
})




name.addEventListener("mouseenter", () => {
    name.textContent = "No NAME";
    name.transition = "linear 0.2s"
});

name.addEventListener("mouseleave", () => {
    name.textContent = "STUDIO NAMMA";
});



const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")
const box4 = document.querySelector(".box4")
const second = document.querySelector(".second")

box1.addEventListener("mouseenter",(e)=>{
    point.textContent = 'MATARE';
    // point.style.transition = "linaer 0.2s"
})
box1.addEventListener("mouseleave",(e)=>{
    point.textContent = '';
    // point.style.transition = "linaer 0.2s"
})
box2.addEventListener("mouseenter",(e)=>{
    point.textContent = 'MATARE';
    point.style.transition = "linaer 0.2s"
})
box2.addEventListener("mouseleave",(e)=>{
    point.textContent = '';
    point.style.transition = "linaer 0.2s"
})
box3.addEventListener("mouseenter",(e)=>{
    point.textContent = 'MATARE';
    point.style.transition = "linaer 0.2s"
})
box3.addEventListener("mouseleave",(e)=>{
    point.textContent = '';
    point.style.transition = "linaer 0.2s"
})
box4.addEventListener("mouseenter",(e)=>{
    point.textContent = 'MATARE';
    point.style.transition = "linaer 0.2s"
})
box4.addEventListener("mouseleave",(e)=>{
    point.textContent = '';
    point.style.transition = "linaer 0.2s"
})