function openModal() {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('mainHeader').classList.add('blur');
    document.getElementById('mainContainer').classList.add('blur');
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('mainHeader').classList.remove('blur');
    document.getElementById('mainContainer').classList.remove('blur');
}