// Your code goes here
//mouseover
let pageHeader = document.querySelector(".logo-heading");
pageHeader.addEventListener("mouseover", (event) => {
    pageHeader.style.color = "red";
    pageHeader.style.fontSize = "6rem";
})

// mouseleave
let pageHeaderRev = document.querySelector(".logo-heading");
pageHeader.addEventListener("mouseleave", (e) => {
    pageHeader.style.color = "black";
    pageHeader.style.fontSize = "4rem";
});

//wheel 
let wheel = document.querySelector(".destination h4")

wheel.addEventListener('wheel', (e) => {
    alert("wheeling Fun In The Sun")
});

// keydown & keyup (enterBtn)
function changeColor(enter) {
    let logo = document.querySelector(".intro p");
    if (enter === "keydown") {
        logo.style.color = "#cc0099";
    } else if (enter === "keyup") {
        logo.style.color = "black";
    }
}

document.addEventListener("keydown", () => changeColor("keydown"));

document.addEventListener("keyup", () => changeColor("keyup"));


// Drag the fun bus intro img to 50%
const funBusBanner = document.querySelector(".intro img");

funBusBanner.addEventListener('drag', (e) =>
    e.target.style.transform = 'scale(.5)');


// resize  window.
window.addEventListener('resize', () =>
    alert("The Bus is FFFUN!!!!")
);

// scroll event
window.addEventListener('scroll', () => {
    console.log("This page is been scrolled")
});


//load
window.addEventListener('load', (e) => {
    console.log('Page is fully loaded');
    alert('This is the load event');

});

//  copy

let pEl = document.querySelectorAll("p");

pEl.forEach(p =>
    p.addEventListener("copy", (event) =>
        (event.target.style.backgroundColor = "yellow")

    ));

// paste

pEl.forEach(p =>
    p.addEventListener("paste", (e) =>
        (e.target.style.backgroundColor = "white")

    ));

//dbl click
const dbclick = document.querySelector('.intro h2');
dbclick.addEventListener('dblclick', (event) => {
    dbclick.style.transform = "scale(1.5)";
    dbclick.style.transition = "transform 0.5s";
});

const dbclickrev = document.querySelector('.intro h2');
dbclickrev.addEventListener('click', (event) => {
    dbclickrev.style.transform = "scale(1.1)";
    dbclickrev.style.transition = "transform 0.5s";
});

//images mouseenter/mouseleave
const imgScale = document.querySelectorAll(".img-content");
imgScale.forEach(item => {
    item.addEventListener('mouseenter', (event) => {
        item.style.transform = "scale(1.3)";
        item.style.transition = "transform 0.5s";
    })
});

const imgScaleDwn = document.querySelectorAll(".img-content");
imgScaleDwn.forEach(item => {
    item.addEventListener('mouseleave', (event) => {
        item.style.transform = "scale(1)";
        item.style.transition = "transform 0.5s";
    })
});


//event propagation for nav links.

document.querySelectorAll(".nav-link").forEach(element => {

    element.addEventListener("click", (event) => {
        console.log("link stopped");
        event.preventDefault();
    })
});