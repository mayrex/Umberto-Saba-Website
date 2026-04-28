// Hamburger Menu mobile — iniettato dinamicamente
(function () {
    const header = document.querySelector('header');
    const nav = document.querySelector('header nav');
    if (!header || !nav) return;

    // Crea il bottone hamburger
    const btn = document.createElement('button');
    btn.className = 'hamburger';
    btn.setAttribute('aria-label', 'Apri menu');
    btn.innerHTML = `<span></span><span></span><span></span>`;
    header.appendChild(btn);

    // Toggle apertura/chiusura menu
    btn.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('nav-open');
        btn.classList.toggle('is-open', isOpen);
        btn.setAttribute('aria-label', isOpen ? 'Chiudi menu' : 'Apri menu');
    });

    // Chiudi il menu quando si clicca su un link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-open');
            btn.classList.remove('is-open');
        });
    });

    // Chiudi cliccando fuori
    document.addEventListener('click', (e) => {
        if (!header.contains(e.target)) {
            nav.classList.remove('nav-open');
            btn.classList.remove('is-open');
        }
    });
})();
