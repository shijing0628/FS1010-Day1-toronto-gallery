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
