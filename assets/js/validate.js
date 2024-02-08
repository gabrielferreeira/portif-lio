const form = document.getElementById("form");
const user = document.getElementById("nome");
const email = document.getElementById("email");
const message = document.getElementById("message");
const successAlert = document.querySelector(".alert-content.success");
const errorAlert = document.querySelector(".alert-content.error");

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const focusedElement = document.activeElement;
    if (focusedElement.tagName === "TEXTAREA") {
      event.preventDefault();
      return;
    } else if (focusedElement.tagName === "INPUT") {
      checkForm();
    }
  }
});

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
    displayAlert("success");
    clearInputs();
    setTimeout(() => {
      successAlert.style.display = "none";
    }, 3000); // Remover após 3 segundos
  } else {
    displayAlert("error");
    setTimeout(() => {
      errorAlert.style.display = "none";
    }, 3000); // Remover após 3 segundos
  }
}

// FUNÇÃO PARA LIMPAR OS CAMPOS APÓS ENVIAR AS INFORMAÇÕES CORRETAS
function clearInputs() {
  user.value = "";
  email.value = "";
  message.value = "";
}

// FUNÇÃO PARA EXIBIR ALERTA
function displayAlert(type) {
  if (type === "success") {
    successAlert.style.display = "flex";
    errorAlert.style.display = "none";
  } else if (type === "error") {
    successAlert.style.display = "none";
    errorAlert.style.display = "flex";
  }
}

// FUNÇÃO PARA EXIBIR ERRO NOS CAMPOS DE INPUTS
function inputError(input, message) {
  const formItem = input.parentElement;
  const msgItem = formItem.querySelector("span");

  msgItem.innerText = message;
  formItem.className = "input-control error";
}

// FUNÇÃO PARA LIMPAR O ERRO NOS CAMPOS DE INPUTS
function clearInputError(input) {
  const formItem = input.parentElement;
  const msgItem = formItem.querySelector("span");

  msgItem.innerText = "";
  formItem.className = "input-control";
}

// Adicione um ouvinte de evento para o ícone "x" no alerta de sucesso
successAlert.querySelector(".bi-x").addEventListener("click", () => {
  successAlert.style.animation = "exit 0.3s ease forwards";
  setTimeout(() => {
    successAlert.style.display = "none";
    successAlert.style.animation = "";
  }, 300);
});

// Adicione um ouvinte de evento para o ícone "x" no alerta de erro
errorAlert.querySelector(".bi-x").addEventListener("click", () => {
  errorAlert.style.animation = "exit 0.3s ease forwards";
  setTimeout(() => {
    errorAlert.style.display = "none";
    errorAlert.style.animation = "";
  }, 300);
});
