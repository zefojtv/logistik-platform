const quoteLink = document.querySelector('[data-quote-mail]');
const menuButton = document.querySelector('[data-menu-button]');
const navLinks = document.querySelector('[data-nav-links]');

if (quoteLink) {
  const subject = encodeURIComponent('Tilbudsforespørgsel fra Logistik OS');
  const body = encodeURIComponent(`Hej,

Jeg ønsker et tilbud på transport.

Kunde:
Afhentning:
Levering:
Godstype:
Vægt/paller:
Ønsket dato:

Venlig hilsen`);
  quoteLink.setAttribute('href', `mailto:salg@logistik-os.dk?subject=${subject}&body=${body}`);
}

menuButton?.addEventListener('click', () => {
  const isOpen = navLinks?.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(Boolean(isOpen)));
});
