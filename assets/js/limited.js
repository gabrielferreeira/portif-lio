const projetosItens = document.querySelectorAll(".projetcs-items");
const verMaisButton = document.getElementById("plus-btn");
const verMenosButton = document.getElementById("minus-btn");

verMenosButton.style.display = "none";

//verifica se existe mais de 3 proejtos em tela, caso exista, mostre apenas 3 inicias
projetosItens.forEach((item, index) => {
  if (index >= 3) {
    item.style.display = "none";
  }
});

verMaisButton.addEventListener("click", function () {
  projetosItens.forEach((item, index) => {
    if (index >= 3 && index < 6) {
      item.style.display = "block";
    }
  });

  verMaisButton.style.display = "none";
  verMenosButton.style.display = "block";
});

verMenosButton.addEventListener("click", function () {
  projetosItens.forEach((item, index) => {
    if (index >= 3 && index < 6) {
      item.style.display = "none";
    }
  });

  verMaisButton.style.display = "block";
  verMenosButton.style.display = "none";
});
