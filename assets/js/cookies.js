let cookies = document.getElementById("cookies");
let btnAccept = document.getElementById("accept");
let btnReject = document.getElementById("reject");

window.addEventListener("load", executesCookies);

function executesCookies() {
  if (!localStorage.getItem("cookieAccepted")) {
    cookies.classList.add("show");
  }

  btnAccept.addEventListener("click", () => {
    localStorage.setItem("cookieAccepted", true);
    cookies.classList.remove("show");
  });

  btnReject.addEventListener("click", () => {
    localStorage.removeItem("cookieAccepted");
    cookies.classList.remove("show");
  });
}
