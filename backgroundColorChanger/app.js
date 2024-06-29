let btn = document.querySelector('button');
let h1 = document.querySelector('h1');

btn.addEventListener('click', function () {
    // let red = Math.floor(Math.random() * 255)
    // let green = Math.floor(Math.random() * 255)
    // let blue = Math.floor(Math.random() * 255)

    // let randomColor = `rgb(${red}, ${green}, ${blue})`

    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`

    h1.innerText = randomColor;
    // btn.style.color = randomColor;
    btn.style.fontWeight = "bold";
    document.body.style.backgroundColor = randomColor;
});