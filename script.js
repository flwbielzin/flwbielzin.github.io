window.addEventListener("scroll", onScroll);
window.addEventListener("DOMContentLoaded", removeDuplicateProjectCards);

onScroll();
function onScroll() {
  showButtonHomeOnScroll();
}

function showButtonHomeOnScroll() {
  if (scrollY > 200) {
    document.querySelector("#buttonHome").classList.add("show");
  } else {
    document.querySelector("#buttonHome").classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function initSwiper() {
  const swiperElement = document.querySelector(".mySwiper");
  if (!swiperElement) {
    return;
  }

  new Swiper(".mySwiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      },
    },
  });
}

initSwiper();

const hamburger = document.querySelector(".hamburger");
const navContent = document.querySelector(".nav-content");
const body = document.body;

if (hamburger && navContent) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navContent.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
  if (!hamburger || !navContent) {
    return;
  }

  hamburger.classList.remove("active");
  navContent.classList.remove("active");
  body.classList.remove("no-scroll");
}

function removeDuplicateProjectCards() {
  const cardsContainer = document.querySelector("#projects .cards");
  if (!cardsContainer) {
    return;
  }

  const seenCards = new Set();
  const cards = cardsContainer.querySelectorAll(".card");

  cards.forEach((card) => {
    const title = (card.querySelector("h3")?.textContent || "")
      .trim()
      .toLowerCase();
    const link = (card.querySelector("a")?.getAttribute("href") || "")
      .trim()
      .toLowerCase();
    const uniqueKey = `${title}::${link}`;

    if (seenCards.has(uniqueKey)) {
      card.remove();
      return;
    }

    seenCards.add(uniqueKey);
  });
}

