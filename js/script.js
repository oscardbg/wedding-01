const song = document.querySelector("audio");
window.onload = () => (song.volume = "0.2");

const finalDate = new Date("January 1, 2024 12:00:00");

const getElem = (elem) => {
  return document.querySelector(elem);
};

const dayElem = getElem(".days span");
const hourElem = getElem(".hours span");
const minElem = getElem(".mins span");
const segElem = getElem(".segs span");

const calcDate = () => {
  let now = new Date().getTime();
  let gap = finalDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);

  dayElem.textContent = d;
  hourElem.textContent = h < 10 ? "0" + h : h;
  minElem.textContent = m < 10 ? "0" + m : m;
  segElem.textContent = s < 10 ? "0" + s : s;
};

setInterval(calcDate, 1000);

const imgs = ["./img/love02.jpg", "./img/love01.jpg", "./img/love03.jpg", "./img/love04.jpg"];
const galleryElem = getElem(".gallery img");

let i = 0;

const changePics = () => {
  galleryElem.src = imgs[i];
  if (i < imgs.length - 1) {
    i++;
  } else {
    i = 0;
  }
};

setInterval(changePics, 1500);
