var caixa = document.getElementById('caixa');

caixa.addEventListener('click', function(Clicou) {
  caixa.style.backgroundColor = 'blue';
  caixa.innerHTML = 'Clicou';
});

caixa.addEventListener('mouseover', function(passou) {
  caixa.style.backgroundColor = "black";
  caixa.innerHTML = 'Passou';
});

caixa.addEventListener('mouseout', function() {
  caixa.style.backgroundColor = 'green';
  caixa.innerHTML = ';)';
});
