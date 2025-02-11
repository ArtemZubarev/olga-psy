const year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;

$(document).ready(function () {
  $(".slider")
    .slick({
      slidesToShow: 4,

      infinite: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    })
    .on("afterChange", function (event, slick, currentSlide, nextSlide) {
      const playButtons = document.querySelectorAll(".slider__button");
      const videos = document.querySelectorAll(".slider__video");

      playButtons.forEach((button) => {
        const id = button.getAttribute("aria-label");
        const video = document.querySelector(`#video-${id}`);
        button.classList.remove("hidden");
        video.pause();
      });
    });
});

const playButtons = document.querySelectorAll(".slider__button");
const videos = document.querySelectorAll(".slider__video");

playButtons.forEach((button) => {
  const id = button.getAttribute("aria-label");
  const video = document.querySelector(`#video-${id}`);

  button.addEventListener("click", () => {
    video.play();
    button.classList.add("hidden");
  });
});

videos.forEach((video) => {
  video.addEventListener("pause", () => {
    const id = video.getAttribute("id").replace("video-", "");
    const button = document.querySelector(`[aria-label="${id}"]`);
    button.classList.remove("hidden");
  });
});

const form = document.getElementById("signup");

form.addEventListener("submit", logSubmit);

function logSubmit(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  console.log(data);
}

const button = document.querySelector(".header__mob");
const sidebar = document.querySelector(".sidebar");
const underLayer = document.querySelector(".sidebar__underlay");
const closeButton = document.querySelector(".sidebar__close");

button.addEventListener("click", (event) => {
  toggleNav();
});
closeButton.addEventListener("click", (event) => {
  toggleNav();
});
underLayer.addEventListener("click", (event) => {
  toggleNav();
});

function toggleNav() {
  sidebar.classList.toggle("active");
}
