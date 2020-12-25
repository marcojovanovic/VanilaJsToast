const toastContainer = document.querySelector('.toast-container');

const toastMaker = document.querySelector('.btn');

toastMaker.addEventListener('click', () => createToast());

const messages = [
  'success message',
  'info message',
  'danger message',
  'warnning message',
];

function randMessages() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function createToast(message = '') {
  let toast = document.createElement('div');
  toast.classList.add('toast');

  toast.innerHTML = message ? message : `<p>${randMessages()}</p>`;

   toast.addEventListener('click', ()=> toast.remove())

  setTimeout(() => {
    toast.remove();
  }, 3000);

  toastContainer.appendChild(toast);
}
