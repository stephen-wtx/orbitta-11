/* =========================================================
   INTERAÇÃO — CARREGAR FERRAMENTA NO PAINEL COM SKELETON
   ========================================================= */

let activeAcaoId = 0;

document.addEventListener("click", (e) => {
  const link = e.target.closest("a[data-acao]");
  if (!link) return;

  e.preventDefault();

  const acao = link.dataset.acao;
  if (!dados[acao]) return;

  const toolPanel = document.getElementById("toolPanel");
  const toolTitle = document.getElementById("toolPanelTitle");
  const toolLinks = document.getElementById("toolPanelLinks");

  // Incrementa ID de requisição ativa para evitar condições de corrida
  activeAcaoId++;
  const thisRequestId = activeAcaoId;

  // Atualiza título imediatamente
  toolTitle.textContent = dados[acao].titulo;
  toolLinks.innerHTML = "";

  // Renderiza Skeletons para dar feedback visual de carregamento
  for (let i = 0; i < 3; i++) {
    const skeletonCard = document.createElement("div");
    skeletonCard.className = "skeleton-card";

    const iconPlaceholder = document.createElement("div");
    iconPlaceholder.className = "skeleton-icon skeleton-shimmer";

    const textPlaceholder = document.createElement("div");
    textPlaceholder.className = "skeleton-text skeleton-shimmer";

    const extPlaceholder = document.createElement("div");
    extPlaceholder.className = "skeleton-ext skeleton-shimmer";

    skeletonCard.appendChild(iconPlaceholder);
    skeletonCard.appendChild(textPlaceholder);
    skeletonCard.appendChild(extPlaceholder);
    toolLinks.appendChild(skeletonCard);
  }

  // Exibe painel com os skeletons imediatamente
  toolPanel.style.display = "block";
  toolPanel.scrollIntoView({ behavior: "smooth", block: "start" });

  // Simula o carregamento e popula com os links reais após 300ms
  setTimeout(() => {
    // Se outra categoria foi clicada nesse meio tempo, aborta esta renderização
    if (thisRequestId !== activeAcaoId) return;

    toolLinks.innerHTML = "";

    // Popula links reais
    dados[acao].ferramentas.forEach(item => {
      const card = document.createElement("a");
      card.href = item.url;
      card.target = "_blank";
      card.className = "tool-link";

      const icon = document.createElement("img");
      icon.src = `https://www.google.com/s2/favicons?domain=${item.url}&sz=64`;
      icon.alt = item.nome;
      icon.loading = "lazy";

      const name = document.createElement("span");
      name.textContent = item.nome;

      const extIcon = document.createElement("i");
      extIcon.className = "fas fa-external-link-alt tool-link-ext";

      card.appendChild(icon);
      card.appendChild(name);
      card.appendChild(extIcon);
      toolLinks.appendChild(card);
    });
  }, 300);
});
