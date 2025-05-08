const selectFilial = document.getElementById('filial');
const selectCaixa = document.getElementById('caixa');

// Filiais e quantidade de caixas
const filiais = {
  "010301": 11,
  "010701": 3,
  "010801": 4,
  "FOODS": 2
};

// Preenche select de filial
const defaultFilial = document.createElement("option");
defaultFilial.value = "";
defaultFilial.textContent = "Selecione";
selectFilial.appendChild(defaultFilial);

Object.keys(filiais).forEach(filial => {
  const option = document.createElement("option");
  option.value = filial;
  option.textContent = filial;
  selectFilial.appendChild(option);
});

// Atualiza caixas ao mudar filial
selectFilial.addEventListener("change", () => {
  const filialSelecionada = selectFilial.value;
  const totalCaixas = filiais[filialSelecionada] || 0;

  selectCaixa.innerHTML = "";
  const defaultCaixa = document.createElement("option");
  defaultCaixa.value = "";
  defaultCaixa.textContent = "Selecione";
  selectCaixa.appendChild(defaultCaixa);

  for (let i = 1; i <= totalCaixas; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `Caixa ${i}`;
    selectCaixa.appendChild(option);
  }
});
