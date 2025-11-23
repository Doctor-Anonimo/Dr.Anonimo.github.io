// CLAVE DE ACCESO
const ACCESS_CODE = "1234";
const STORAGE_KEY = "medApp_access_granted"; // Nombre para guardar en memoria

// --- INICIO AUTOMÁTICO ---
document.addEventListener('DOMContentLoaded', () => {
    // Revisar si ya inició sesión anteriormente
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
        showApp();
    }
});

// --- LOGIN ---
function checkPassword() {
    const input = document.getElementById('password-input').value;
    const errorMsg = document.getElementById('error-msg');

    if (input === ACCESS_CODE) {
        // Guardar en memoria que ya entró
        localStorage.setItem(STORAGE_KEY, 'true');
        showApp();
    } else {
        errorMsg.classList.remove('hidden');
        document.getElementById('password-input').value = '';
        // Ocultar error después de 3 seg
        setTimeout(() => errorMsg.classList.add('hidden'), 3000);
    }
}

function showApp() {
    document.getElementById('login-screen').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('main-app').classList.remove('hidden');
    }, 300); // Esperar transición
}

// Cerrar sesión (Botón en el menú)
function logout() {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
}

// Permitir Enter en el input
const passInput = document.getElementById('password-input');
if (passInput) {
    passInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkPassword();
    });
}

// --- BUSCADOR ---
function filterTools() {
    const input = document.getElementById('search-bar');
    const filter = input.value.toLowerCase();
    const toolsContainer = document.getElementById('tools-container');
    const cards = toolsContainer.getElementsByClassName('tool-card');

    for (let i = 0; i < cards.length; i++) {
        // Buscar en Título, Tag y Descripción
        const content = cards[i].textContent || cards[i].innerText;
        
        if (content.toLowerCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// --- MENÚ LATERAL ---
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    if (sidebar.classList.contains('open')) {
        // Cerrar
        sidebar.classList.remove('open');
        overlay.classList.remove('visible');
        setTimeout(() => { overlay.style.display = 'none'; }, 300);
    } else {
        // Abrir
        overlay.style.display = 'block';
        setTimeout(() => {
            sidebar.classList.add('open');
            overlay.classList.add('visible');
        }, 10);
    }
}