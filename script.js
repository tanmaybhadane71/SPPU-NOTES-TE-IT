const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
    document.getElementById('year').textContent = new Date().getFullYear();
