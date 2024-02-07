const btns = document.querySelectorAll(".actions");

btns.forEach((item) =>
  item.addEventListener("click", () => actionClickBtn(item))
);

function actionClickBtn(item) {
  btns.forEach((item) => item.classList.remove("active"));
  item.classList.add("active");

  const itemsContent = document.querySelectorAll(".items");

  itemsContent.forEach((items) => items.classList.remove("show"));

  const dataId = item.getAttribute("data-id");
  const content = document.getElementById(dataId);

  content.classList.add("show");
}

const markedItem = document.querySelector(".actions.active");
actionClickBtn(markedItem);
