const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.topic').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.topic.active')?.classList.remove('active');
    button.classList.add('active');
    const filter = button.dataset.filter;
    let shown = 0;
    document.querySelectorAll('.article-card').forEach((card) => {
      const visible = filter === 'all' || card.dataset.topic === filter;
      card.hidden = !visible;
      if (visible) shown += 1;
    });
    document.querySelector('.empty-state').hidden = shown !== 0;
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
