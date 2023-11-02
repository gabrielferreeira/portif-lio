const menuItens = document.querySelectorAll('.menu a[href^="#"]');
const elements = document.querySelectorAll('.hidden');
const over = document.getElementById('body');
const desfoque = document.getElementById('desfoque');

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

elements.forEach((el) => myObserver.observe(el))

menuItens.forEach(item => {
    item.addEventListener('click', scrollSmooth);
})

function scrollToHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

const evt = new Event("scrollExit");

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

    document.dispatchEvent(evt);

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

    duration = typeof duration !== 'undefined' ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
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
};

function abrirMenu() {
    document.getElementById("mobile").style.transform = "translateX(0)";

    over.style.overflowY = "hidden"
    desfoque.style.filter = "blur(2px)";
}

function fecharMenu() {
    document.getElementById("mobile").style.transform = "translateX(-100%)";

    over.style.overflowY = "auto"
    desfoque.style.filter = "";
}

function fechaSidebar() {
    if (abrirMenu) {
        fecharMenu();
    }
}

window.addEventListener('resize', function (e) {
    if (this.window.innerWidth > 768 && abrirMenu) {
        fecharMenu();
    }
});

document.addEventListener("scrollExit", fecharMenu);