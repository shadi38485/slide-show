const images = document.querySelectorAll(".images-box img");
const indicators = document.querySelectorAll(".indicators span");
// console.log(images);
// console.log(indicators);

let index = 0;

document.querySelector(".next").addEventListener("click", () => {
  images[index].style.display = "none";
  indicators[index].style.opacity = "40%";
  index++;
  if (index == images.length) {
    index = 0;
  }
  images[index].style.display = "block";
  indicators[index].style.opacity = "100%";
});

document.querySelector(".previous").addEventListener("click", function () {
  images[index].style.display = "none";
  indicators[index].style.opacity = "40%";
  index--;
  if (index == -1) {
    index = images.length - 1;
  }
  images[index].style.display = "block";
  indicators[index].style.opacity = "100%";
});

indicators.forEach((item, i) => {
  
  item.addEventListener("click", () => {
    images.forEach((item) => {
      item.style.display = "none";
    });

    indicators.forEach((item) => {
      item.style.opacity = "40%";
    });

    images[i].style.display = "block";
    indicators[i].style.opacity = "100%";
  });
});

/// time


/// Date
/// Math
