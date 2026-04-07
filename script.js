const daysEle = document.querySelector(".in-days");
const hrsEle = document.querySelector(".in-hours");
const minsEle = document.querySelector(".in-minutes");
const secsEle = document.querySelector(".in-seconds");

const pad = (num) => String(num).padStart(2, "0");

const target = Date.now() + 10 * 24 * 60 * 60 * 1000;

setInterval(() => {
  const diff = target - Date.now();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  daysEle.textContent = pad(days);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  hrsEle.textContent = pad(hours);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  minsEle.textContent = pad(minutes);
  const seconds = Math.floor((diff / 1000) % 60);
  secsEle.textContent = pad(seconds);
}, 1000);
