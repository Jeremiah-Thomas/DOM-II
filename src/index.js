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
  alert("Welcome to Great Idea! Where terrible UX is our goal.");
});

//Use mouseover event
document.querySelector("header").addEventListener("mouseover", (evt) => {
  if (evt.fromElement.nodeName === "BODY") {
    alert("Please don't leave!");
  }
  console.log(evt.fromElement);
});

//Use contextmenu event
const rightClkPlaceElem = document.createElement("div");
rightClkPlaceElem.style.position = "fixed";
rightClkPlaceElem.style.pointerEvents = "none";
rightClkPlaceElem.style.width = "60px";
rightClkPlaceElem.style.height = "40px";
rightClkPlaceElem.style.backgroundColor = "#17A2B8";
rightClkPlaceElem.style.zIndex = "1000";
rightClkPlaceElem.textContent = "You right clicked";
document.querySelector("body").addEventListener("contextmenu", (evt) => {
  evt.preventDefault();
  rightClkPlaceElem.style.left = String(evt.x - 30 + "px");
  rightClkPlaceElem.style.top = String(evt.y - 20 + "px");
  evt.target.appendChild(rightClkPlaceElem);
  return false;
});

//Use mousedown event
document.addEventListener("mousedown", (evt) => {
  if (evt.target.textContent) {
    evt.target.style.color = "red";
  }
});

//Use mouseup event
document.addEventListener("mouseup", (evt) => {
  if (evt.target.textContent) {
    evt.target.style.color = "black";
  }
});

//Use keydown event
const mainTitle = document.querySelector(".logo-heading");
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    mainTitle.textContent = "Fun Bus";
  } else {
    mainTitle.textContent = `You have pressed the ${evt.key} key.`;
  }
});

//Use preventDefault
document.querySelector(".nav-link").addEventListener("click", (evt) => {
  evt.preventDefault();
});
