let h1 = document.querySelector("#heading");
setInterval(() => {
    let time = new Date().toLocaleTimeString();
    h1.innerHTML = time;
}, 1000);