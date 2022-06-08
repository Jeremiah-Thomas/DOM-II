import "./less/index.less";

// Your code goes here!

//Use mousemove event
const cursor = document.createElement("div");
cursor.style.position = "fixed";
cursor.style.backgroundColor = "#17A2B8";
cursor.style.width = "20px";
cursor.style.height = "20px";
cursor.style.borderRadius = "50%";
cursor.style.pointerEvents = "none";
document.querySelector("body").appendChild(cursor);
document.querySelector("body").style.cursor = "none";

document.addEventListener("mousemove", (evt) => {
  cursor.style.top = String(evt.y - 10 + "px");
  cursor.style.left = String(evt.x - 10 + "px");
});

//Use mouseenter event
let curBackgroundColor;
document.querySelectorAll("section").forEach((section) => {
  section.addEventListener("mouseenter", (evt) => {
    curBackgroundColor = evt.target.style.backgroundColor;
    cursor.style.backgroundColor = "white";
    evt.target.style.backgroundColor = "#17A2B8";
  });
});

//Use mouseleave event
document.querySelectorAll("section").forEach((section) => {
  section.addEventListener("mouseleave", (evt) => {
    evt.target.style.backgroundColor = curBackgroundColor;
    cursor.style.backgroundColor = "#17A2B8";
  });
});

//Use click event
document.addEventListener("click", (evt) => {
  console.log(evt);
  alert(`You have clicked on the ${evt.target.nodeName} element.`);
});

//Use load event
window.addEventListener("load", (evt) => {
  alert("Welcome to Great Idea!");
});

//Use mouseover event
document.querySelector("header").addEventListener("mouseover", (evt) => {
  alert("Please don't leave!");
});

//Use preventDefault
document.querySelector(".nav-link").addEventListener("click", (evt) => {
  evt.preventDefault();
});
