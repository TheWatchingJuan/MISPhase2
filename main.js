function openModal() {
  const modal = document.getElementById('tour-modal');
  if(modal) {
    modal.classList.remove('hidden');
    void modal.offsetWidth;
    modal.classList.remove('opacity-0');
    modal.children[0].classList.remove('scale-95');
  }
}

function closeModal() {
  const modal = document.getElementById('tour-modal');
  if(modal) {
    modal.classList.add('opacity-0');
    modal.children[0].classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('button, a');
  triggers.forEach(el => {
    const text = el.innerText.trim().toLowerCase();
    if (text.includes('book a tour') || text.includes('contact us') || text.includes('connect with management') || text.includes('apply for residency')) {
      el.onclick = (e) => {
        if (!el.href || !el.href.includes('mailto')) {
          e.preventDefault();
          openModal();
        }
      };
    }
  });

  const tourModal = document.getElementById('tour-modal');
  if (tourModal) {
    tourModal.addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });
  }
});
