document.addEventListener("DOMContentLoaded", function () {
  initializeCourses();
});

function initializeCourses() {
  const coursesItems = document.querySelectorAll(".courses-items");
  const coursesArray = Array.from(coursesItems);

  coursesArray.forEach((course) => {
    const courseStatus = course.getAttribute("data-status");
    const linkCertificate = course.querySelector(".link-certificate");

    if (linkCertificate && courseStatus === "em andamento") {
      linkCertificate.style.cursor = "not-allowed";
      linkCertificate.addEventListener("click", blockCertificateClick);
    }
  });
}

function filterCourses() {
  const filterValue = document.getElementById("courses-filter").value;
  const coursesItems = document.querySelectorAll(".courses-items");
  const coursesArray = Array.from(coursesItems);

  coursesArray.forEach((course) => {
    const courseStatus = course.getAttribute("data-status");
    const linkCertificate = course.querySelector(".link-certificate");

    if (linkCertificate) {
      linkCertificate.removeEventListener("click", blockCertificateClick);

      if (filterValue === "select" || courseStatus === filterValue) {
        if (courseStatus === "em andamento") {
          linkCertificate.style.cursor = "not-allowed";
          linkCertificate.addEventListener("click", blockCertificateClick);
        } else {
          linkCertificate.style.cursor = "pointer";
          linkCertificate.removeAttribute("onclick");
        }
      } else {
        linkCertificate.style.cursor = "not-allowed";
        linkCertificate.addEventListener("click", blockCertificateClick);
      }
    }

    course.style.display =
      filterValue === "select" || courseStatus === filterValue
        ? "flex"
        : "none";
  });
}

function blockCertificateClick(event) {
  event.preventDefault();
  alert(
    "Ops! você não pode acessar o certificado antes do curso ter sido concluído."
  );
}
