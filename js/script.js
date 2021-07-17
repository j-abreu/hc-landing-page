const form = document.getElementById("register-form");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const submitButton = document.getElementById("submit-button");
  const nameInput = document.getElementById("name");
  const nameError = document.getElementById("name-error-message");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error-message");
  
  if (nameInput.value.trim() === "") {
    nameError.classList.add("active");
    return;
  }
  nameError.classList.remove("active");

  const emailRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i;
  const validEmail = emailRegex.test(emailInput.value);
  if (!validEmail) {
    emailError.classList.add("active");
    return;
  }
  emailError.classList.remove("active");


  submitButton.classList.add("sent");
  submitButton.innerHTML = "Enviado!";
  nameInput.value = "";
  emailInput.value = "";
  setTimeout(() => {
    submitButton.classList.remove("sent");
    submitButton.innerHTML = "Cadastrar";
  }, 3000);
})