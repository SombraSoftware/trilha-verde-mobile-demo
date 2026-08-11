// ===== DROPDOWN DE UNIDADES =====
function toggleDropdown() {
  const list = document.getElementById('dropdownList');
  const arrow = document.getElementById('dropdownArrow');
  const isOpen = list.classList.contains('open');

  if (isOpen) {
    list.classList.remove('open');
    arrow.classList.remove('open');
  } else {
    list.classList.add('open');
    arrow.classList.add('open');
  }
}

function selectUnit(unitName) {
  document.getElementById('dropdownLabel').textContent = unitName;
  document.getElementById('dropdownList').classList.remove('open');
  document.getElementById('dropdownArrow').classList.remove('open');
  console.log('Unidade selecionada:', unitName);
}

// Fecha o dropdown ao clicar fora
document.addEventListener('click', function (event) {
  const wrapper = document.querySelector('.dropdown-wrapper');
  const list = document.getElementById('dropdownList');
  const arrow = document.getElementById('dropdownArrow');

  if (wrapper && !wrapper.contains(event.target)) {
    list.classList.remove('open');
    arrow.classList.remove('open');
  }
});

// ===== NAVEGAÇÃO ENTRE PÁGINAS =====
const pageTitles = {
  visao: 'Visão Geral',
  cooperados: 'Cooperados',
  empresas: 'Empresas Parceiras',
  veiculos: 'Veículo de Coleta',
  pontos: 'Pontos de Coleta',
  registro: 'Registro de Coleta',
  compras: 'Compras',
  vendas: 'Vendas',
  relatorios: 'Relatórios',
  usuarios: 'Usuários',
  unidades: 'Unidades de Coleta'
};

function setPage(btn, page) {
  // Remove active de todos os itens do menu
  document.querySelectorAll('.nav-item').forEach(function (el) {
    el.classList.remove('active');
  });

  // Adiciona active no item clicado
  btn.classList.add('active');

  // Atualiza a área de conteúdo
  const area = document.getElementById('contentArea');
  area.innerHTML =
    '<div style="text-align:center; color:#7a7a5a;">' +
    '<h2 style="font-size:22px; font-weight:500; margin-bottom:10px;">' + pageTitles[page] + '</h2>' +
    '<p style="font-size:14px; opacity:0.8;">Conteúdo da página &quot;' + pageTitles[page] + '&quot; será carregado aqui.</p>' +
    '</div>';
}