const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(loginForm);
      const formValues = Object.fromEntries(formData.entries())
      if (Object.values(formValues).some(value => !value.trim())) {
        alert('All fields must be filled in.');
        return;
      }
      console.log(formValues);
      loginForm.reset();
    });