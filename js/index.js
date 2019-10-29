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