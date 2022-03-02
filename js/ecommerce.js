// access button

let button1 = document.querySelector(".btn1")
let button2 = document.querySelector(".btn2")
let button3 = document.querySelector(".btn3")

// row access

let row1 = document.querySelector(".row-1")
let row2 = document.querySelector(".row-2")
let row3 = document.querySelector(".row-3")

button1.addEventListener("click" , function(){
     row1.classList.add("active")
     row2.classList.remove("active")
     row3.classList.remove("active")
     button1.classList.add("decor")
     button2.classList.remove("decor")
     button3.classList.remove("decor")
})

button2.addEventListener("click" , function(){
    row2.classList.add("active")
    row1.classList.remove("active")
    row3.classList.remove("active")
    button2.classList.add("decor")
    button1.classList.remove("decor")
    button3.classList.remove("decor")
})

button3.addEventListener("click" , function(){
    row3.classList.add("active")
    row1.classList.remove("active")
    row2.classList.remove("active")
    button3.classList.add("decor")
    button1.classList.remove("decor")
    button2.classList.remove("decor")
})