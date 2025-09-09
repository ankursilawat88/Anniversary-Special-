let currentSlide = 0;
const photos = ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg"];
const slideshow = document.getElementById("slideshow");

// Countdown Logic
let timeLeft = 10;
const countdownEl = document.getElementById("countdown");

const timer = setInterval(() => {
  timeLeft--;
  countdownEl.textContent = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(timer);
    showPage("wishPage");
  }
}, 1000);

// Page Navigation
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");

  if (pageId === "photosPage") startSlideshow();
  if (pageId === "letterPage") typeLetter();
}

// Slideshow
function startSlideshow() {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % photos.length;
    slideshow.src = photos[currentSlide];
  }, 2500);
}

// Letter Typing
const letter = "My Love, thank you for being the most beautiful part of my life. This journey with you has been nothing less than magical, and I promise to hold your hand forever ❤️.";
let index = 0;
function typeLetter() {
  const textEl = document.getElementById("letterText");
  textEl.textContent = "";
  index = 0;
  const typer = setInterval(() => {
    if (index < letter.length) {
      textEl.textContent += letter.charAt(index);
      index++;
    } else {
      clearInterval(typer);
    }
  }, 50);
}

// Music Autoplay Fix
window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  music.volume = 0.5;
  music.play().catch(() => {
    // Fallback trick
    document.body.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });
});
