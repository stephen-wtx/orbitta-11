const dashboard = document.getElementById("dashboard");

categorias.forEach(cat => {
  const card = document.createElement("div");
  card.className = "card";

  const titulo = document.createElement("h2");
  titulo.textContent = cat.titulo;

  const links = document.createElement("div");
  links.className = "links";

  cat.itens.forEach(item => {
    const a = document.createElement("a");
    a.href = item.url;
    a.target = "_blank";

    const img = document.createElement("img");
    img.src = `https://www.google.com/s2/favicons?sz=64&domain=${item.dominio}`;
    img.alt = item.nome;

    const span = document.createElement("span");
    span.textContent = item.nome;

    a.appendChild(img);
    a.appendChild(span);
    links.appendChild(a);
  });

  card.appendChild(titulo);
  card.appendChild(links);
  dashboard.appendChild(card);
});
