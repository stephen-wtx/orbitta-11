
/* =========================================================
   INTERAÇÃO — ABRIR MODAL
   ========================================================= */

document.addEventListener("click", (e) => {
  const link = e.target.closest("a[data-acao]");
  if (!link) return;

  e.preventDefault(); // 🔥 impede scroll para o topo

  const acao = link.dataset.acao;
  if (!dados[acao]) return;

  // Atualiza cor do modal
  const card = link.closest(".card");
  if (card) {
    const cor = getComputedStyle(card).getPropertyValue("--cor-principal");
    document.querySelector(".modal")
      .style.setProperty("--cor-principal", cor);
  }

  // Conteúdo do modal
  modalTitulo.textContent = dados[acao].titulo;
  modalLinks.innerHTML = "";

  dados[acao].ferramentas.forEach(item => {
    const novoLink = document.createElement("a");
    novoLink.href = item.url;
    novoLink.target = "_blank";

    const icon = document.createElement("img");
    icon.src = `https://www.google.com/s2/favicons?domain=${item.url}&sz=64`;

    novoLink.appendChild(icon);
    novoLink.append(item.nome);

    modalLinks.appendChild(novoLink);
  });

  modal.style.display = "flex";
});


/* =========================================================
   INTERAÇÃO — FECHAR MODAL
   ========================================================= */

modalClose.onclick = () => {
  modal.style.display = "none";
};

modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("click", (e) => {
  const link = e.target.closest("a[data-acao]");
  if (!link) return;

  const card = link.closest(".card");
  if (!card) return;

  // Lê a cor principal do card
  const cor = getComputedStyle(card).getPropertyValue("--cor-principal");

  // Aplica no modal
  document.querySelector(".modal").style.setProperty("--cor-principal", cor);
});

