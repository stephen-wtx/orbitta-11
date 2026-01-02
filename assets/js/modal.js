
/* =========================================================
   INTERAÇÃO — ABRIR MODAL
   ========================================================= */

document.addEventListener("click", (e) => {
  const acao = e.target.closest("a")?.dataset?.acao;
  if (!acao || !dados[acao]) return;

  modalTitulo.textContent = dados[acao].titulo;
  modalLinks.innerHTML = "";

  dados[acao].ferramentas.forEach(item => {
    const link = document.createElement("a");
    link.href = item.url;
    link.target = "_blank";

    const icon = document.createElement("img");
    icon.src = `https://www.google.com/s2/favicons?domain=${item.url}&sz=64`;

    link.appendChild(icon);
    link.append(item.nome);

    modalLinks.appendChild(link);
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
