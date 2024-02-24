const images = document.querySelectorAll(".images-box img");
const indicators = document.querySelectorAll(".indicators span");

let index = 0;

const nextSlide = () => {
  images[index].style.display = "none";
  indicators[index].style.opacity = "40%";
  index++;
  if (index == images.length) {
    index = 0;
  }
  images[index].style.display = "block";
  indicators[index].style.opacity = "100%";
};
const previousSlide = () => {
  images[index].style.display = "none";
  indicators[index].style.opacity = "40%";
  index--;
  if (index == -1) {
    index = images.length - 1;
  }
  images[index].style.display = "block";
  indicators[index].style.opacity = "100%";
};

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".previous").addEventListener("click", previousSlide);
setInterval(nextSlide, 5000);



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
// setTimeout(()=>{
//    console.log("Hi");
//    alert("hello")
// }, 3000)

// let n=0
// setInterval(() => {
//    n++
//   console.log(n);
// }, 3000);

// let n=0
// setInterval(() => {
//    n++
//   console.log(n);
// }, 1000);

/// Date
/// Math
