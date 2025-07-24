const images =  [ "favicons/home_page_img.jpg", "favicons/home_test.jpg", "favicons/promotion_01.jpg", "favicons/promotion_02.jpg", "favicons/promotion_03.jpg"]
let currentIndex = 0;

const imageElements = document.querySelectorAll(".images img");

function updateCarousel() {
  for (let i = 0; i < imageElements.length; i++) {
    const relativeIndex = (currentIndex + i - 2 + images.length) % images.length;
    imageElements[i].src = images[relativeIndex];
    imageElements[i].classList.toggle("center", i === 2);
  }
}

// ✅ Navigation buttons
document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});




