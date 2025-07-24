// Procura por possíveis JWTs no texto da página e exibe no console

(function() {
  // Regex simples para JWT (não cobre todos os casos)
  const jwtRegex = /([A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+)/g;
  const bodyText = document.body.innerText;
  const matches = bodyText.match(jwtRegex);

  if (matches) {
    console.log('JWTs encontrados na página:', matches);
  }
})();