function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('login-error');

    if (username === 'andreikoo3' && password === 'andreikoo3') {
        // Логін успішний, перенаправлення на іншу сторінку (наприклад, головну сторінку)
        window.location.href = 'index.html';
    } else {
        errorMessage.textContent = 'Неправильний логін або пароль.';
    }
}
