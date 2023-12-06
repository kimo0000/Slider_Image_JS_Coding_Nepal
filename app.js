const slider = document.querySelector(".slider");
const image = slider.querySelectorAll(".img img");
const prevNext = document.querySelectorAll(".arrow i");
const btns = document.querySelectorAll(".btns span");

let isDrawing = false;
let maxScrollLeft = slider.scrollWidth - slider.clientWidth;

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");
  });
});

const showHideArrow = () => {
  console.log(slider.scrollLeft, maxScrollLeft);

  if (Math.floor(slider.scrollLeft) === maxScrollLeft - 1) {
    prevNext[1].style.opacity = 0;
  } else {
    prevNext[1].style.opacity = 1;
  }

  if (slider.scrollLeft < 1) {
    prevNext[0].style.opacity = 0;
  } else {
    prevNext[0].style.opacity = 1;
  }
};

prevNext.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    slider.scrollLeft +=
      arrow.id === "left" ? -image[0].clientWidth : image[0].clientWidth;

    showHideArrow();
  });
});

const startDrawing = (e) => {
  isDrawing = true;
  slider.scrollLeft += image[0].clientWidth;
};

const drawing = () => {
  if (!isDrawing) return;
};

slider.addEventListener("mousedown", startDrawing);
slider.addEventListener("mousemove", drawing);
slider.addEventListener("mouseup", () => (isDrawing = false));
