const form = document.getElementById("form");
const user = document.getElementById("nome");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
});

// FUNÇÃO PARA OCUTAR O ERRO APÓS CLICAR FORA DO INPUT
user.addEventListener("blur", () => {
  checkUser();
});

email.addEventListener("blur", () => {
  checkEmail();
});

message.addEventListener("blur", () => {
  checkMessage();
});

// FUNÇÃO PARA CHECAR O CAMPO DE USUÁRIO
function checkUser() {
  const userValue = user.value;

  if (userValue === "") {
    inputError(user, "O nome é obrigatório.");
  } else {
    const formItem = user.parentElement;
    formItem.className = "input-control";
  }
}

// FUNÇÃO PARA CHECAR O CAMPO DE E-MAIL
function checkEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    inputError(email, "O e-mail é obrigatório.");
  } else {
    const formItem = email.parentElement;
    formItem.className = "input-control";
  }
}

function checkMessage() {
  const messageValue = message.value;

  if (messageValue === "") {
    inputError(message, "A mensagem é obrigatória.");
  } else {
    const formItem = message.parentElement;
    formItem.className = "input-control";
  }
}

// FUNÇÃO PARA CHECAR OS CAMPOS DO FORMULÁRIO
function checkForm() {
  checkUser();
  checkEmail();
  checkMessage();

  const formItens = form.querySelectorAll(".input-control");

  const validate = [...formItens].every((item) => {
    return item.className === "input-control";
  });

  if (validate) {
    alert("Usuário cadastrado com sucesso.");
    clearInputs();
  } else {
    alert("Preencha as informações corretamentes.");
  }
}

// FUNÇÃO PARA LIMPAR OS CAMPOS APÓS ENVIAR AS INFORMAÇÕES CORRETAS
function clearInputs() {
  user.value = "";
  email.value = "";
  message.value = "";
}

// FUNÇÃO PARA EXIBIR ERRO NOS CAMPOS DE INPUTS
function inputError(input, message) {
  const formItem = input.parentElement;
  const msgItem = formItem.querySelector("span");

  msgItem.innerText = message;
  formItem.className = "input-control error";
}
