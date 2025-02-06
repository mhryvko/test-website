  function validateForm1() {
    const nameInput = document.querySelector('#name');
    const dateInput = document.querySelector('#birth-date');
    const checkbox = document.querySelector('#terms-checkbox');
    let isValid = true;

    clearErrors();

    if (!nameInput || !nameInput.value.trim()) {
      showError('Name cannot be empty.');
      isValid = false;
    }

    if (!dateInput || !dateInput.value) {
      showError('Please select your date of birth.');
      isValid = false;
    }

    if (!checkbox || !checkbox.checked) {
      showError('You must agree to the terms and conditions.');
      isValid = false;
    }

    return isValid;
  }

  function validateForm2() {
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    let isValid = true;

    clearErrors();

    if (!emailInput || !emailInput.value.trim() || !emailInput.value.includes('@')) {
      showError('Please enter a valid email address.');
      isValid = false;
    }

    if (!passwordInput || !passwordInput.value.trim()) {
      showError('Password cannot be empty.');
      isValid = false;
    }

    return isValid;
  }

  function showError(message) {
    const existingError = document.querySelector('.error-message');
    if (existingError) return;

    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    document.body.appendChild(error);

    setTimeout(() => {
      error.remove();
    }, 3000);
  }

  function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach((error) => error.remove());
  }

  function showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Thank you, our manager will contact you soon.';
    document.body.appendChild(successMessage);

    setTimeout(() => {
      successMessage.remove();
    }, 3000);
  }

  document.querySelector('.submit-btn').addEventListener('click', function (e) {
    e.preventDefault();
    if (validateForm1()) {
      showSuccessMessage();
    }
  });

  document.querySelector('.button.email').addEventListener('click', function (e) {
    e.preventDefault();
    if (validateForm2()) {
      alert('Second form submitted successfully!');
    }
  });
