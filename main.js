const leftCards = document.querySelector(".left");

const rightCards = document.querySelector(".right");

let yOffset = 0;

let xOffset = 0;

const yTimeout = () => {
  yOffset -= 400;
  leftCards.style.transform = `translateY(${yOffset}px)`;

  if (yOffset <= -1200) {
    yOffset = 400;
    clearTimeout(yTimeout);
  }

  setTimeout(yTimeout, 2000);
};

const xTimeout = () => {
  xOffset -= 600;
  rightCards.style.transform = `translateX(${xOffset}px)`;

  if (xOffset <= -1800) {
    xOffset = 600;
    clearTimeout(xTimeout);
  }

  setTimeout(xTimeout, 2000);
};

setTimeout(yTimeout, 1000);

setTimeout(xTimeout, 1000);
