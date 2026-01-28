function openAlertModal(productName) {
    const modal = document.getElementById('alert-modal');
    document.getElementById('modal-product-name').innerText = productName;
    modal.style.display = 'flex';
}

function closeAlertModal() {
    document.getElementById('alert-modal').style.display = 'none';
}

// Fechar ao clicar fora do modal
window.onclick = function(event) {
    const modal = document.getElementById('alert-modal');
    if (event.target == modal) {
        closeAlertModal();
    }
}

function saveAlert() {
    const price = document.getElementById('target-price').value;
    if(price) {
        alert("Alerta Premium ativado! Notificaremos quando baixar de " + price + " Kz");
        closeAlertModal();
    } else {
        alert("Por favor, insira um preço alvo.");
    }
}