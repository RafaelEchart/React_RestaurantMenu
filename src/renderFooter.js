const renderFooter = () => {
  const footer = document.createElement('footer');
  const footerContent = 'Created by Microverse under CC license';

  footer.classList.add('footer');
  footer.innerHTML = `<p class="footer__content">${footerContent}</p>`;
  document.body.appendChild(footer);
};

export default renderFooter;