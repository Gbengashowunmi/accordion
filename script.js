const cross = document.getElementById("cross");
const box = document.querySelector(".box");
const box1 = document.querySelector(".box1");const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");



const line = document.querySelector(".hr")
const line1 = document.querySelector(".hr1");
const line2 = document.querySelector(".hr2");
const line3 = document.querySelector(".hr3")



const para1 = document.querySelector(".para1");
const para2 = document.querySelector(".para2");
const para3 = document.querySelector(".para3");
const para4 = document.querySelector(".para4")

box.addEventListener("click", ()=>{
    para1.classList.toggle("active");
    line.classList.toggle("active");
    box.classList.toggle("active");
})

box1.addEventListener("click", ()=>{
    para2.classList.toggle("active");
    line1.classList.toggle("active");
    box1.classList.toggle("active");
})

box2.addEventListener("click", ()=>{
    para3.classList.toggle("active");
    line2.classList.toggle("active");
    box2.classList.toggle("active");
 })

box3.addEventListener("click", ()=>{
    para4.classList.toggle("active");
    line3.classList.toggle("active");
    box3.classList.toggle("active");
 })
