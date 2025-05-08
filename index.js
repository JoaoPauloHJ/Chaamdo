const form = document.getElementById('formChamado');
const listaChamados = document.getElementById('listaChamados');
const selectFilial = document.getElementById('filial');
const selectCaixa = document.getElementById('caixa');

// 1. Filiais e quantidade de caixas:
const filiais = {
  "010301": 11,
  "010701": 3,
  "010801": 4,
  "FOODS": 2
};

// 2. Preenche o select de filial
const defaultFilial = document.createElement("option");
defaultFilial.value = "";
defaultFilial.textContent = "Selecione";
selectFilial.appendChild(defaultFilial);

Object.keys(filiais).forEach(filial => {
  const option = document.createElement("option");
  option.value = filial;
  option.textContent = `${filial}`;  // Removi o "- " para não aparecer um caractere extra
  selectFilial.appendChild(option);
});

// 3. Atualiza o select de caixa quando filial muda
selectFilial.addEventListener("change", function () {
  const filialSelecionada = selectFilial.value;
  const totalCaixas = filiais[filialSelecionada];

  // Limpa o select de caixa
  selectCaixa.innerHTML = "";  // Limpeza do select

  // Adiciona a opção "Selecione"
  const defaultCaixa = document.createElement("option");
  defaultCaixa.value = "";
  defaultCaixa.textContent = "Selecione";
  selectCaixa.appendChild(defaultCaixa);

  // Adiciona os caixas correspondentes à filial
  for (let i = 1; i <= totalCaixas; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `Caixa ${i}`;
    selectCaixa.appendChild(option);
  }
});

// 4. Ao enviar o chamado
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const filial = selectFilial.value;
  const caixa = selectCaixa.value;
  const descricao = document.getElementById('descricao').value;

  const chamado = document.createElement('div');
  chamado.classList.add('chamado');
  chamado.innerHTML = `
    <strong>Filial:</strong> ${filial}<br>
    <strong>Caixa:</strong> ${caixa}<br>
    <p><strong>Problema:</strong> ${descricao}</p>
  `;

  listaChamados.appendChild(chamado);
  form.reset();
  
  // Toca o som
  document.getElementById('somSucesso').play().catch(() => {
    // evita erro se o navegador bloquear autoplay
  });
  
  // Mostra o pop-up
  const popup = document.getElementById('popupSucesso');
  popup.style.display = 'flex';

  // Fecha automaticamente após 3 segundos
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);
});

// Função para fechar o pop-up manualmente
function fecharPopup() {
  document.getElementById('popupSucesso').style.display = 'none';
}
