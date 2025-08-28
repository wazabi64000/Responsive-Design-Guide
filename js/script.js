// Navigation et boutons accessibles
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('keyup', e => {
    if (e.key === "Enter" || e.key === " ") button.click();
  });
});

// Gestion des menus hamburger
document.querySelectorAll('#menu-btn').forEach(btn => {
  const menu = document.getElementById('main-menu');
  if (menu) {
    btn.addEventListener('click', () => menu.classList.toggle('open'));
  }
});

// Gestion alertes accessibles
function accessibleAlert(message) {
  let alertBox = document.getElementById('accessible-alert');
  if (!alertBox) {
    alertBox = document.createElement('div');
    alertBox.id = 'accessible-alert';
    alertBox.setAttribute('role','alert');
    alertBox.style.position = 'absolute';
    alertBox.style.left = '-9999px';
    document.body.appendChild(alertBox);
  }
  alertBox.textContent = message;
}

document.querySelectorAll('.alert-btn').forEach(btn => {
  btn.addEventListener('click', () => accessibleAlert('Action réussie !'));
});
