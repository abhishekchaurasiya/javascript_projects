let startBtn = document.querySelector(".startBtn");
let stopBtn = document.querySelector(".stopBtn");
let resetBtn = document.querySelector(".resetBtn");
let timer = document.querySelector(".timer");

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

const start = () => {
  startTime = Date.now() - elapsedTime;
  timeInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timer.textContent = formatTime(elapsedTime);
  }, 10);

  startBtn.disabled = true;
  stopBtn.disabled = false;
};

const formatTime = (elapsedTime) => {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}
    `;
};

const stopTime = () => {
  clearInterval(timeInterval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
};

const reset = () => {
  clearInterval(timeInterval);
  elapsedTime = 0;
  timer.textContent = "00:00:00";

  startBtn.disabled = false;
  stopBtn.disabled = true;
};

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stopTime);
resetBtn.addEventListener("click", reset);
