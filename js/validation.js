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

  function openModal() {
    const modal = document.querySelector('#successModal');
    modal.style.display = 'flex';
  }

  function closeModal() {
    const modal = document.querySelector('#successModal');
    modal.style.display = 'none';
  }

  document.querySelector('.submit-btn').addEventListener('click', function (e) {
    e.preventDefault();
    if (validateForm1()) {
      openModal();
    }
  });
