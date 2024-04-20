function homeScript() {
  const today = new Date();

  // define a primeira data possivel no agendamento como sendo o dia atual
  const dateInput = document.querySelector('form #date');
  dateInput.setAttribute('min', today.toISOString().slice(0, 10));

  // define o ano exibido no footer da página
  const footerYear = document.querySelector('footer .current-year');
  footerYear.textContent = today.getFullYear();
}

homeScript();
