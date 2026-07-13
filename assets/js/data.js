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



const design = {
  "fontes": [
    { nome: "Google Fonts", url: "https://fonts.google.com" },
    { nome: "Fontshare", url: "https://fontshare.com" },
    { nome: "Adobe Fonts", url: "https://fonts.adobe.com" },
    { nome: "Font Space", url: "https://www.fontspace.com" },
    { nome: "DaFont", url: "https://www.dafont.com" },
    { nome: "Uncut", url: "https://www.uncut.wtf" },
    { nome: "Collletttivo", url: "https://www.collletttivo.it" },
    { nome: "Font Squirrel", url: "https://www.fontsquirrel.com" },
    { nome: "1001freefonts", url: "https://www.1001freefonts.com" },
    { nome: "Fontlibrary", url: "https://www.fontlibrary.org" },
    { nome: "Fontesk", url: "https://www.fontesk.com" },
    { nome: "Unblast", url: "https://www.unblast.com" },
     
  ],

  "melhorar-qualidade": [
    { nome: "Picsart", url: "https://picsart.com" },
    { nome: "Upscale.media", url: "https://www.upscale.media" },
    { nome: "Cotout.pro", url: "https://www.cutout.pro" }
  ],

};


/* =========================================================
   FERRAMENTAS — IMAGENS
   ========================================================= */

const ferramentasImagem = {
  "remover-fundo": [
    { nome: "Pixa", url: "https://www.pixa.com/ai-image-editor?tool=removeBackground" },
    { nome: "Remove.bg", url: "https://www.remove.bg" },
    { nome: "Adobe Express", url: "https://www.adobe.com/express/feature/image/remove-background" }
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
  ],

  "remover-metadados": [
    { nome: "Pics io", url: "https://pics.io/remove-metadata-from-photo" },
    { nome: "ExifClear", url: "https://exifclear.com/" },
    { nome: "MetaRemover", url: "https://www.metaremover.com" },
    { nome: "ImgWash", url: "https://www.imgwash.com" },
    { nome: "ExifX", url: "https://www.exifx.com" }
  ],

  "banco-imagens-gratis": [
    { nome: "Unsplash", url: "https://unsplash.com" },
    { nome: "Pexels", url: "https://www.pexels.com" },
    { nome: "Pixabay", url: "https://pixabay.com" },
    { nome: "Burst", url: "https://burst.shopify.com" },
    { nome: "FreeImages", url: "https://www.freeimages.com" }
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
    { nome: "CloudConvert", url: "https://cloudconvert.com/audio-converter" },
  ],

  "gerar-efeito": [
    { nome: "Audioalter", url: "https://audioalter.com" },
    { nome: "Slow and Reverb Studio", url: "https://slowedandreverb.studio" },
    { nome: "SS Slowed and Reverb", url: "https://ssslowedandreverb.com" },
    { nome: "Slowed + Reverb", url: "https://www.slowedandreverb.io/" }
  ]
};


/* =========================================================
   FERRAMENTAS — IA & PRODUTIVIDADE
   ========================================================= */

   const ferramentasIA = {
    "texto-conteudo": [
      { nome: "ChatGPT", url: "https://chat.openai.com" },
      { nome: "Perplexity", url: "https://www.perplexity.ai" },
      { nome: "Claude", url: "https://claude.ai" },
      { nome: "Deepseek", url: "https://www.deepseek.com" },
      { nome: "Copilot", url: "https://copilot.microsoft.com" }
    ],

    "design-apresentacao": [
      { nome: "Gamma", url: "https://gamma.app" },
      { nome: "Beautiful.ai", url: "https://www.beautiful.ai" },
      { nome: "Canva", url: "https://www.canva.com" },
      { nome: "Pitch", url: "https://pitch.com" },
      { nome: "Visme", url: "https://www.visme.co" },
      { nome: "Adobe Express", url: "https://www.adobe.com/express/create/presentation" },
      { nome: "Slidesgo", url: "https://slidesgo.com" }
    ],

    "gerar-imagem": [
      { nome: "Stable Diffusion", url: "https://stablediffusionweb.com" },
      { nome: "Craiyon", url: "https://craiyon.com" },
      { nome: "Reve", url: "https://app.reve.com" },
      { nome: "Nano Banana (Gemini)", url: "https://gemini.google.com" },
      { nome: "BYLO AI", url: "https://bylo.ai" }
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
   FERRAMENTAS — DOCUMENTOS
   ========================================================= */


   const ferramentasDocumentos = {
  "converter-para-pdf": [
    { nome: "iLovePDF", url: "https://www.ilovepdf.com" },
    { nome: "Smallpdf", url: "https://smallpdf.com" },
    { nome: "PDF24 Tools", url: "https://tools.pdf24.org" }
  ],

  "converter-de-pdf": [
    { nome: "CloudConvert", url: "https://cloudconvert.com" },
    { nome: "FreeConvert", url: "https://freeconvert.com" },
    { nome: "Adobe Acrobat Online", url: "https://www.adobe.com/acrobat/online" }
  ],

  "comprimir-pdf": [
    { nome: "iLovePDF", url: "https://www.ilovepdf.com/compress_pdf" },
    { nome: "Smallpdf", url: "https://smallpdf.com/compress-pdf" },
    { nome: "PDF Compressor", url: "https://www.freepdfconvert.com/compress-pdf" }
  ],

  "editar-pdf": [
    { nome: "Sejda", url: "https://www.sejda.com" },
    { nome: "PDFescape", url: "https://www.pdfescape.com" },
    { nome: "PDF24 Editor", url: "https://tools.pdf24.org/en/edit-pdf" }
  ],

  "assinar-pdf": [
    { nome: "DocuSign", url: "https://www.docusign.com" },
    { nome: "Smallpdf eSign", url: "https://smallpdf.com/sign-pdf" },
    { nome: "Adobe Acrobat Sign", url: "https://www.adobe.com/sign.html" }
  ],

  "proteger-pdf": [
    { nome: "iLovePDF Protect", url: "https://www.ilovepdf.com/protect-pdf" },
    { nome: "Smallpdf Protect", url: "https://smallpdf.com/protect-pdf" },
    { nome: "PDF2Go", url: "https://www.pdf2go.com/protect-pdf" }
  ],

  "traduzir-pdf": [
    { nome: "Smallpdf", url: "https://smallpdf.com/pt/traduzir-pdf#r=translate" },
    { nome: "SupaWork", url: "https://supawork.ai/pt-br/ai-pdf-translator" },
    { nome: "OpenL", url: "https://openl.io/pt/translate/" },
    { nome: "iLovePDF", url: "https://www.ilovepdf.com/translate-pdf" },  
  ]
};


/* =========================================================
   FERRAMENTAS — ARMAZENAMENTO
   ========================================================= */

   const ferramentasArmazenamento = [
  {
    titulo: "Armazenamento em nuvem",
    itens: [
      {
        nome: "Google Drive",
        url: "https://drive.google.com",
        dominio: "drive.google.com"
      },
      {
        nome: "OneDrive",
        url: "https://onedrive.live.com",
        dominio: "onedrive.live.com"
      },
      {
        nome: "Proton Drive",
        url: "https://proton.me/drive",
        dominio: "proton.me/drive"
      },
      {
        nome: "Mega",
        url: "https://mega.nz",
        dominio: "mega.nz"
      },

      {
        nome: "Dropbox",
        url: "https://www.dropbox.com",
        dominio: "dropbox.com"
      }
    ]
  }
];


/* =========================================================
   FERRAMENTAS — ENTRETENIMENTO
   ========================================================= */
   const ferramentasEntretenimento = {
  "filmes-series": [
    { nome: "Overflix", url: "https://overflixtv.forum/" },
    { nome: "Obaflix", url: "https://obaflix.cloud/" },
    { nome: "Baixar filmes mp4", url: "https://filmesmp4.vip/" },
    { nome: "Popcormovies", url: "https://popcornmovies.org/" },
    { nome: "67 Movies", url: "https://67movies.net/" }
  ],

  "animes": [
    { nome: "AnimesROLL", url: "https://anroll.tv/" },
    { nome: "Meusanimes", url: "https://meusanimes.blog/" },
    { nome: "MyAnimeList", url: "https://myanimelist.net" },
    { nome: "AniList", url: "https://anilist.co" },
    { nome: "Kitsu", url: "https://kitsu.io" }
  ]
};


/* =========================================================
   FERRAMENTAS — ENTRETENIMENTO
   ========================================================= */
   const ferramentasBaixadorVideos = {
  "youtube": [
    { nome: "Y2mate", url: "https://v18.www-y2mate.com/" },
    { nome: "YTDown", url: "https://app.ytdown.to/en27/" },
    { nome: "Yt1d.io", url: "https://yt1d.io/en22zv/" },
    { nome: "Vidssave", url: "https://vidssave.com/index" },
    { nome: "Zeemo", url: "https://zeemo.to/en2/" },
  ],

  "tiktok": [
    { nome: "SSSTIK", url: "https://ssstik.io/"},
    { nome: "MusicallyDown", url: "https://musicaldown.com/en"},
    { nome: "Savetik", url: "https://savett.cc/en1/" },
    { nome: "SnapTik", url: "https://snaptik.app/"},
    { nome: "TTDownloader", url: "https://ttdownloader.com/" },
    { nome: "TikTok Downloader", url: "https://tiktokdownloader.com/" }
  ],

  "instagram": [
    { nome: "SSSinstagram", url: "https://sssinstagram.com/pt"},
    { nome: "Reelsvideo", url: "https://reelsvideo.io/"},
    { nome: "SnapInsta", url: "https://snapinsta.to/en2"},
    { nome: "Toolzu", url: "https://toolzu.com/downloader/instagram/video/"},
    { nome: "InDown.io", url: "https://indown.io/en1"},
  ],

  "facebook": [
    { nome: "FDownloader.Net", url: "https://fdownloader.net/pt"},
    { nome: "SnapSave", url: "https://snapsave.app/pt"},
    { nome: "Fsave", url: "https://fsaver.net/"},
    { nome: "Fget.io", url: "https://fget.io/"},
    { nome: "Publer", url: "https://publer.com/tools/facebook-video-downloader"},
  ],

  "pinterest": [
    { nome: "KlickPin", url: "https://klickpin.com/pt/"},
    { nome: "PinLoad", url: "https://pinload.app/en/download"},
    { nome: "Publer", url: "https://publer.com/tools/pinterest-video-downloader"},
    { nome: "CONVERTCO", url: "https://convertico.com/pinterest-downloader/"},
    { nome: "SavePinMedia", url: "https://savepinmedia.com/pt-1"},
  ],

  "multiopcional": [
    {
      nome: "Anydownloader", url: "https://anydownloader.com/"
    }
  ]
};



/* =========================================================
   DADOS UNIFICADOS DAS FERRAMENTAS
   (fonte única de verdade para ações)
   ========================================================= */

const dados = {
    /* -------- DESIGN -------- */
  "icons": {
    titulo: "Icons",
    ferramentas: design["icons"]
  },

  "fontes": {
    titulo: "Fontes",
    ferramentas: design["fontes"]
  },

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

  "remover-metadados": {
    titulo: "Remover metadados",
    ferramentas: ferramentasImagem["remover-metadados"]
  },

  "banco-imagens-gratis": {
    titulo: "Banco de imagens grátis",
    ferramentas: ferramentasImagem["banco-imagens-gratis"]
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

  "gerar-efeito": {
    titulo: "Gerar efeito",
    ferramentas: ferramentasAudio["gerar-efeito"]
  },

  /* -------- IA & PRODUTIVIDADE -------- */

  "texto-conteudo": {
    titulo: "Criação e análise de texto",
    ferramentas: ferramentasIA["texto-conteudo"]
  },

  "design-apresentacao": {
    titulo: "Apresentações automáticas",
    ferramentas: ferramentasIA["design-apresentacao"]
  },

  "gerar-imagem": {
    titulo: "Gerar imagem com IA",
    ferramentas: ferramentasIA["gerar-imagem"]
  },

  "texto-voz": {
    titulo: "Texto → Voz",
    ferramentas: ferramentasIA["texto-voz"]
  },

    /* -------- DOCUMENTOS -------- */

  "converter-para-pdf": {
    titulo: "Converter para PDF",
    ferramentas: ferramentasDocumentos["converter-para-pdf"]
  },

  "converter-de-pdf": {
    titulo: "Converter de PDF",
    ferramentas: ferramentasDocumentos["converter-de-pdf"]
  },

  "comprimir-pdf": {
    titulo: "Comprimir PDF",
    ferramentas: ferramentasDocumentos["comprimir-pdf"]
  },

  "editar-pdf": {
    titulo: "Editar PDF",
    ferramentas: ferramentasDocumentos["editar-pdf"]
  },

  "assinar-pdf": {
    titulo: "Assinar PDF",
    ferramentas: ferramentasDocumentos["assinar-pdf"]
  },

  "proteger-pdf": {
    titulo: "Proteger PDF",
    ferramentas: ferramentasDocumentos["proteger-pdf"]
  },

  "traduzir-pdf": {
    titulo: "Traduzir PDF",
    ferramentas: ferramentasDocumentos["traduzir-pdf"]
  },
  


  /* -------- ENTRETENIMENTO -------- */
  "filmes-series": {
    titulo: "Filmes & Séries",
    ferramentas: ferramentasEntretenimento["filmes-series"]
  },

  "animes": {
    titulo: "Animes",
    ferramentas: ferramentasEntretenimento["animes"]
  },

    /* -------- BAIXADOR DE VÍDEOS -------- */
  "youtube": {
    titulo: "YouTube",
    ferramentas: ferramentasBaixadorVideos["youtube"]
  },

  "tiktok": {
    titulo: "TikTok",
    ferramentas: ferramentasBaixadorVideos["tiktok"]
  },

  "instagram": {
    titulo: "Instagram",
    ferramentas: ferramentasBaixadorVideos["instagram"]
   },

   "facebook": {
    titulo: "Facebook",
    ferramentas: ferramentasBaixadorVideos["facebook"]
   },

   "pinterest": {
    titulo: "Pinterest",
    ferramentas: ferramentasBaixadorVideos["pinterest"]
   },

   "multiopcional": {
    titulo: "Multiopcional",
    ferramentas: ferramentasBaixadorVideos["multiopcional"]
   }

}






  
