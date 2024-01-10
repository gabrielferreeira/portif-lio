const menuItens = document.querySelectorAll('.menu a[href^="#"]');
const elements = document.querySelectorAll(".hidden");
const iconMobile = document.querySelector(".iconMobile");
const mobile = document.querySelector(".mobile");
const body = document.body;
const open = "open";
let isMenuOpen = false;

iconMobile.addEventListener("click", function () {
  toggleMenu();
});

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

elements.forEach((el) => myObserver.observe(el));

menuItens.forEach((item) => {
  item.addEventListener("click", function (event) {
    scrollSmooth(event);
    toggleMenu();
  });
});

function toggleMenu() {
  if (mobile.classList.contains(open)) {
    mobile.classList.remove(open);
    updateIcon(false);
  } else {
    mobile.classList.add(open);
    updateIcon(true);
  }
}

function updateIcon(isMenuOpen) {
  const bars = document.querySelector(".bi.bars");
  const exit = document.querySelector(".bi.exit");

  if (isMenuOpen) {
    bars.style.display = "none";
    exit.style.display = "block";
  } else {
    bars.style.display = "block";
    exit.style.display = "none";
  }
}

function scrollToHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollSmooth(event) {
  event.preventDefault();

  const section = scrollToHref(event.target) - 30;

  scrollSmoothPosition(section);
}

function scrollSmoothPosition(section) {
  // window.scroll({
  //     top: section,
  //     behavior: "smooth",
  // });

  smoothScrollTo(0, section);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
}

const projetosItens = document.querySelectorAll(".box-projetos-itens");
projetosItens.forEach((item, index) => {
  if (index >= 3) {
    item.style.display = "none";
  }
});

// Adicionando lógica para carregar mais projetos
const verMaisButton = document.getElementById("ver-mais");
verMaisButton.addEventListener("click", function () {
  projetosItens.forEach((item, index) => {
    if (index >= 3 && index < 6) {
      item.style.display = "block";
    }
  });

  verMaisButton.style.display = "none";
});
