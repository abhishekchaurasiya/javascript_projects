let indicator = document.querySelector(".scroller-indicator .progress");

let scrollerHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", scroll);

function scroll() {
    let scrollTop = document.documentElement.scrollTop;
    let progress = (scrollTop / scrollerHeight) * 100;
    indicator.style.width = `${progress}%`;
}