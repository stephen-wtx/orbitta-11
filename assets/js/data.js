const categorias = [
  {
    titulo: "Design & Inspiração",
    itens: [
      {
        nome: "Pinterest",
        url: "https://www.pinterest.com",
        dominio: "pinterest.com"
      },
      {
        nome: "Behance",
        url: "https://www.behance.net",
        dominio: "behance.net"
      },
      {
        nome: "Dribbble",
        url: "https://dribbble.com",
        dominio: "dribbble.com"
      },
        {
        nome: "Land-Book",
        url: "https://land-book.com",
        dominio: "land-book.com"
      }
      
    ]
  }
];

const ferramentasImagem = {
  "remover-fundo": [
    { nome: "Pixelcut", url: "https://www.pixelcut.ai" },
    { nome: "Remove.bg", url: "https://www.remove.bg" },
    { nome: "Adobe Express", url: "https://www.adobe.com/express" }
  ],

  "melhorar-qualidade": [
    { nome: "Picsart", url: "https://picsart.com" },
    { nome: "Upscale.media", url: "https://www.upscale.media" },
    { nome: "Cotout.pro", url: "https://www.cutout.pro" }
  ],

  "converter-formatos": [
    { nome: "FreeConvert", url: "https://freeconvert.com" },
    { nome: "CloudConvert", url: "https://cloudconvert.com" },
    { nome: "iLoveIMG", url: "https://www.iloveimg.com" }
  ],

  "comprimir-imagens": [
    { nome: "TinyPNG", url: "https://tinypng.com" },
    { nome: "CompressJPEG", url: "https://compressjpeg.com" },
    { nome: "Compressor.io", url: "https://compressor.io"}
  ]
};

const ferramentasVideo = {
  "comprimir-video": [
    { nome: "Clipchamp", url: "https://www.clipchamp.com" },
    { nome: "VEED.io", url: "https://www.veed.io" },
    { nome: "Online UniConverter", url: "https://www.media.io" }
  ],

  "converter-formatos": [
    { nome: "CloudConvert", url: "https://cloudconvert.com" },
    { nome: "Online Video Converter", url: "https://www.onlinevideoconverter.com" },
    { nome: "Zamzar", url: "https://www.zamzar.com" }
  ],

  "editar-video": [
    { nome: "WeVideo", url: "https://www.wevideo.com" },
    { nome: "InVideo", url: "https://invideo.io" },
    { nome: "Kapwing", url: "https://www.kapwing.com" }
  ],

  "gerar-legendas": [
    { nome: "Flixier", url: "https://flixier.com" },
    { nome: "Kapwing", url: "https://www.kapwing.com/subtitles" },
    { nome: "Adobe Express", url: "https://www.adobe.com/express/feature/video/add-caption" }
  ]
};


const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalTitulo = document.getElementById("modalTitulo");
const modalLinks = document.getElementById("modalLinks");


const dados = {
  "remover-fundo": {
    titulo: "Remover fundo",
    ferramentas: [
      { nome: "Pixelcut", url: "https://www.pixelcut.ai" },
      { nome: "Remove.bg", url: "https://www.remove.bg" },
      { nome: "Adobe Express", url: "https://www.adobe.com/express" }
    ]
  },

    "melhorar-qualidade": {
      titulo: "Melhorar qualidade",
      ferramentas: [
        { nome: "Picsart", url: "https://picsart.com" },
        { nome: "Upscale.media", url: "https://www.upscale.media" },
        { nome: "Cotout.pro", url: "https://www.cutout.pro"}
      ]
    },

    "converter-formatos": {
      titulo: "Converter formatos",
      ferramentas: [
        { nome: "CloudConvert", url: "https://cloudconvert.com" },
        { nome: "iLoveIMG", url: "https://www.iloveimg.com" },
        { nome: "FreeConvert", url: "https://freeconvert.com" }
      ]
    },

    "comprimir-imagens": {
      titulo: "Comprimir imagens",
      ferramentas: [
        { nome: "TinyPNG", url: "https://tinypng.com" },
        { nome: "CompressJPEG", url: "https://compressjpeg.com" },
        { nome: "Compressor.io", url: "https://compressor.io" }
      ]
    },


    "comprimir-video": {
      titulo: "Comprimir vídeo",
      ferramentas: [
        { nome: "Clipchamp", url: "https://www.clipchamp.com" },
        { nome: "VEED.io", url: "https://www.veed.io" },
        { nome: "Online UniConverter", url: "https://www.media.io" }
      ]
    },

    "editar-video": {
      titulo: "Editar vídeo",
      ferramentas: [
        { nome: "WeVideo", url: "https://www.wevideo.com" },
        { nome: "InVideo", url: "https://invideo.io" },
        { nome: "Kapwing", url: "https://www.kapwing.com" }
      ]
    },

    "gerar-legendas": {
      titulo: "Gerar legendas",
      ferramentas: [
        { nome: "Flixier", url: "https://flixier.com" },
        { nome: "Kapwing", url: "https://www.kapwing.com/subtitles" },
        { nome: "Adobe Express", url: "https://www.adobe.com/express/feature/video/add-caption" }
      ]
    }
    
  };



/* CLICK NAS AÇÕES */
document.addEventListener("click", (e) => {
  const acao = e.target.closest("a")?.dataset?.acao;
  if (!acao || !dados[acao]) return;

  modalTitulo.textContent = dados[acao].titulo;
  modalLinks.innerHTML = "";

  dados[acao].ferramentas.forEach(item => {
    const a = document.createElement("a");
    a.href = item.url;
    a.target = "_blank";

    const img = document.createElement("img");
    img.src = `https://www.google.com/s2/favicons?domain=${item.url}&sz=64`;

    a.appendChild(img);
    a.append(item.nome);

    modalLinks.appendChild(a);
  });

  modal.style.display = "flex";
});

/* FECHAR */
modalClose.onclick = () => modal.style.display = "none";
modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

