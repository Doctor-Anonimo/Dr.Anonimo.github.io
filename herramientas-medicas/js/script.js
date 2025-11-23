// Validar contraseña
function checkPassword() {
    const input = document.getElementById('password-input').value;
    const errorMsg = document.getElementById('error-msg');
    const loginScreen = document.getElementById('login-screen');
    const mainApp = document.getElementById('main-app');

    if (input === "1234") {
        loginScreen.classList.add('hidden');
        mainApp.classList.remove('hidden');
    } else {
        errorMsg.classList.remove('hidden');
        document.getElementById('password-input').value = '';
    }
}

document.getElementById('password-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') checkPassword();
});

// Buscador
function filterTools() {
    const input = document.getElementById('search-bar');
    const filter = input.value.toLowerCase();
    const toolsContainer = document.getElementById('tools-container');
    const cards = toolsContainer.getElementsByClassName('tool-card');

    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].getElementsByTagName("h3")[0];
        const desc = cards[i].getElementsByClassName("desc")[0];
        const tag = cards[i].getElementsByClassName("tag")[0];
        
        const txtValue = title.textContent + " " + desc.textContent + " " + tag.textContent;

        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}