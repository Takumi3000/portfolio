// Функция открытия окна
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Функция закрытия окна
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Закрытие при клике мимо окна
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}