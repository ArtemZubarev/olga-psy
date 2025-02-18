const year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: false,
  autoHeight: true,

  breakpoints: {
    1260: {
      slidesPerView: 4,
    },
    900: {
      slidesPerView: 3,
    },
    680: {
      slidesPerView: 2,
    },
    300: {
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      slidesPerView: 1,
    },
  },
});

const playButtons = document.querySelectorAll(".slider__button");
const videos = document.querySelectorAll(".slider__video");

playButtons.forEach((button) => {
  const id = button.getAttribute("aria-label");
  const video = document.querySelector(`#video-${id}`);

  button.addEventListener("click", () => {
    video.play();
    button.classList.add("hidden");

    videos.forEach((video) => {
      if (video.getAttribute("id") !== `video-${id}`) {
        video.pause();
      }
    });
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

const scrollButtons = document.querySelectorAll(".scrollTo");

scrollButtons.forEach((button) => {
  const target =
    button.getAttribute("href") || button.getAttribute("aria-label");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    const element = document.querySelector(target);
    sidebar.classList.remove("active");

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  });
});
