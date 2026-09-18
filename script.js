const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();


// Keep one Tech Guide card selected at a time.
const guideCards = document.querySelectorAll('.article-card');
guideCards.forEach((card) => {
  card.addEventListener('click', (event) => {
    // Let real links behave normally.
    if (event.target.closest('a')) return;
    guideCards.forEach((item) => item.classList.remove('featured'));
    card.classList.add('featured');
  });
});
