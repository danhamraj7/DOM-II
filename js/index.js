// Your code goes here
//mouseover
let pageHeader = document.querySelector(".logo-heading");
pageHeader.addEventListener("mouseover", (event) => {
    pageHeader.style.color = "red";
    pageHeader.style.fontSize = "6rem";
})
// mouseleave
let pageHeaderRev = document.querySelector(".logo-heading");
pageHeader.addEventListener("mouseleave", (event) => {
    pageHeader.style.color = "black";
    pageHeader.style.fontSize = "4rem";
});

//wheel 
let wheel = document.querySelector(".destination h4")

wheel.addEventListener('wheel', (event) => {
    alert("wheeling Fun In The Sun")
});





//event propagation for nav links.

document.querySelectorAll(".nav-link").forEach(element => {

    element.addEventListener("click", (event) => {
        console.log("link stopped");
        event.preventDefault();
    })
});