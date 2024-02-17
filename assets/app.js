const images = document.querySelectorAll(".image-box img");
console.log(images);

let index = 0;

document.querySelector(".next").addEventListener("click", () => {
  images[index].style.display = "none";
  index++;
  if (index == images.length) {
    index = 0;
  }
  images[index].style.display = "block";
});




/// time


/// Date
/// Math