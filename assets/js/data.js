/* =========================================================
   CATEGORIAS PRINCIPAIS (Dashboard)
   ========================================================= */

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


/* =========================================================
   FERRAMENTAS — IMAGENS
   (usado para organização e expansão futura)
   ========================================================= */

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
    { nome: "Compressor.io", url: "https://compressor.io" }
  ]
};


/* =========================================================
   FERRAMENTAS — VÍDEO
   ========================================================= */

const ferramentasVideo = {
  "comprimir-video": [
    { nome: "SquezeeVideo", url: "https://squeezevideos.com/free" },
    { nome: "VidFlix", url: "https://www.vidfix.io/video-compressor" },
    { nome: "Compressvideo", url: "https://compressvideo.app/" },
    { nome: "Rotato", url: "https://tools.rotato.app/compress" },
    { nome: "Videosos.io", url: "https://videosos.io/" }
  ],

  "converter-formato-video": [
    { nome: "CloudConvert", url: "https://cloudconvert.com" },
    { nome: "Online Convert", url: "https://video.online-convert.com/video-converter" },
    { nome: "Zamzar", url: "https://www.zamzar.com" },
    { nome: "Rotato", url: "https://tools.rotato.app/convert" },
    { nome: "Ezgif", url: "https://ezgif.com" }
  ],

  "editar-video": [
    { nome: "VEED.io", url: "https://www.veed.io" },
    { nome: "Adobe Express", url: "https://www.adobe.com/express/create/video" },
    { nome: "Clipchamp", url: "https://www.clipchamp.com" },
    { nome: "Kapwing", url: "https://www.kapwing.com" }
  ],

  "gerar-legendas": [
    { nome: "VEED.io", url: "https://veed.io" },
    { nome: "Kapwing", url: "https://www.kapwing.com/subtitles" },
    { nome: "Adobe Express", url: "https://www.adobe.com/express/feature/video/add-caption" },
    { nome: "Clideo", url: "https://www.clideo.com" },
    { nome: "Flixier", url: "https://flixier.com" }
  ]
};


/* =========================================================
   FERRAMENTAS — ÁUDIO
   ========================================================= */

const ferramentasAudio = {
  "melhorar-audio": [
    { nome: "Voice Isolator", url: "https://voiceisolator.io/" },
    { nome: "Adobe Podcast", url: "https://podcast.adobe.com/enhance" },
    { nome: "Sunee AI", url: "https://sunee.ai" },
    { nome: "WuTools", url: "https://wutools.com/pt/audio/removedor-ruido-audio" }
  ],

  "converter-formato-audio": [
    { nome: "Super Converter", url: "https://super-converter.com/audio.html" },
    { nome: "NinjaConvert", url: "https://ninjaconvert.com/en/audio-converter" },
    { nome: "FreeConvert", url: "https://www.freeconvert.com/audio-converter" },
    { nome: "CloudConvert", url: "https://cloudconvert.com/audio-converter" }
  ],

  "texto-voz": [
    { nome: "OnlineTTS", url: "https://onlinetts.org" },
    { nome: "TTSMaker", url: "https://ttsmaker.com" },
    { nome: "TTSFree", url: "https://ttsfree.com" },
    { nome: "ElevenLabs", url: "https://elevenlabs.io" },
    { nome: "Media.io", url: "https://www.media.io/text-to-speech.html" }
  ]
};


/* =========================================================
   ELEMENTOS DO MODAL (Display)
   ========================================================= */

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalTitulo = document.getElementById("modalTitulo");
const modalLinks = document.getElementById("modalLinks");


/* =========================================================
   DADOS UNIFICADOS PARA O MODAL
   (fonte única de verdade para ações)
   ========================================================= */

const dados = {
  /* -------- IMAGENS -------- */
  "remover-fundo": {
    titulo: "Remover fundo",
    ferramentas: ferramentasImagem["remover-fundo"]
  },

  "melhorar-qualidade": {
    titulo: "Melhorar qualidade",
    ferramentas: ferramentasImagem["melhorar-qualidade"]
  },

  "converter-formatos": {
    titulo: "Converter formatos",
    ferramentas: ferramentasImagem["converter-formatos"]
  },

  "comprimir-imagens": {
    titulo: "Comprimir imagens",
    ferramentas: ferramentasImagem["comprimir-imagens"]
  },

  /* -------- VÍDEO -------- */
  "comprimir-video": {
    titulo: "Comprimir vídeo",
    ferramentas: ferramentasVideo["comprimir-video"]
  },

  "converter-formato-video": {
    titulo: "Converter formato de vídeo",
    ferramentas: ferramentasVideo["converter-formato-video"]
  },

  "editar-video": {
    titulo: "Editar vídeo",
    ferramentas: ferramentasVideo["editar-video"]
  },

  "gerar-legendas": {
    titulo: "Gerar legendas",
    ferramentas: ferramentasVideo["gerar-legendas"]
  },

  /* -------- ÁUDIO -------- */
  "melhorar-audio": {
    titulo: "Melhorar áudio",
    ferramentas: ferramentasAudio["melhorar-audio"]
  },

  "converter-formato-audio": {
    titulo: "Converter formato de áudio",
    ferramentas: ferramentasAudio["converter-formato-audio"]
  },

  "texto-voz": {
    titulo: "Texto → Voz",
    ferramentas: ferramentasAudio["texto-voz"]
  }
};

