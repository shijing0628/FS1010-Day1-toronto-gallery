// Landing page animation when fist loading
const loadingAnimationTime = 2000
const revealCurtain = (parent) => {
 const curtain = document.createElement("div");
 curtain.classList.add("flex", "curtain");
 parent.appendChild(curtain);
 const progressBar = document.createElement("div");
 progressBar.classList.add("progressBar");
 curtain.appendChild(progressBar);
 progressBar.classList.add("progressGrow-animation");
 return curtain;
};

const init = () => {
 const container = document.getElementById("main");
 const curtain = revealCurtain(container);
 setTimeout(() => {
  container.removeChild(curtain);
  showMainAnimation(container);
 }, loadingAnimationTime)
};
init();


// toggle theme color
const toggle = document.getElementById("toggle"),
 body = document.querySelector("body");
let theme = "bright";


function setStyles(element, params) {
 for (let i in params) {
  element.style.setProperty(i, params[i]);
 }
}

// Main logic
function themeChange() {
 theme = theme === "bright" ? "dark" : "bright";

 if (theme === "bright") {
  setStyles(body, { "--background": "#defcf9", "--text": "#3C3744", "--accent": "#F49F6E", "--socialIcon": "#50248F" });
  toggle.classList.remove("clicked");
 } else {
  setStyles(body, { "--background": "#3C3744", "--text": "#FBFFF1", "--accent": "#3C3744", "--socialIcon": "#fff" });
  toggle.classList.add("clicked");
 }
}

// Event listener for toggle button click
toggle.addEventListener("click", themeChange);