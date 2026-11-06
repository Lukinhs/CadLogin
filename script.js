const passwordIcons = document.querySelectorAll('.password-icon');

passwordIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const passwordInput = icon.previousElementSibling;
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        } else {
            passwordInput.type = 'password';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
    });
});