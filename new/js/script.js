const form = document.querySelector('.formcontato__form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const subjectError = document.getElementById('subjectError');
const messageError = document.getElementById('messageError');
const submitButton = document.getElementById('submitButton');

nameInput.addEventListener('input', () => {
    validateName();
    validateForm();
});
emailInput.addEventListener('input', () => {
    validateEmail();
    validateForm();
});
subjectInput.addEventListener('input', () => {
    validateSubject();
    validateForm();
});
messageInput.addEventListener('input', () => {
    validateMessage();
    validateForm();
});

function validateName() {
    const nameValue = nameInput.value.trim();
    if (nameValue === '') {
        nameError.textContent = 'Campo Nombre no debe estar vacío.';
        return false;
    } else if (nameValue.length > 50) {
        nameError.textContent = 'Nombre debe tener máximo 50 caracteres.';
        return false;
    } else {
        nameError.textContent = '';
        return true;
    }
}

function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === '') {
        emailError.textContent = 'Campo E-mail no debe estar vacío.';
        return false;
    } else if (!emailPattern.test(emailValue)) {
        emailError.textContent = 'E-mail debe tener un formato válido.';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function validateSubject() {
    const subjectValue = subjectInput.value.trim();
    if (subjectValue === '') {
        subjectError.textContent = 'Campo Asunto no debe estar vacío.';
        return false;
    } else if (subjectValue.length > 50) {
        subjectError.textContent = 'Asunto debe tener máximo 50 caracteres.';
        return false;
    } else {
        subjectError.textContent = '';
        return true;
    }
}

function validateMessage() {
    const messageValue = messageInput.value.trim();
    if (messageValue === '') {
        messageError.textContent = 'Campo Mensaje no debe estar vacío.';
        return false;
    } else if (messageValue.length > 300) {
        messageError.textContent = 'Mensaje debe tener máximo 300 caracteres.';
        return false;
    } else {
        messageError.textContent = '';
        return true;
    }
}

function validateForm() {
    if (validateName() && validateEmail() && validateSubject() && validateMessage()) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'disabled');
    }
}