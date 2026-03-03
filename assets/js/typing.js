  // =============================
  // TEXTOO PERMANENTE (SEM LOOP)
  // =============================


const words = [
  "Orbitta 11",
  "Encontre sites e ferramentas úteis para o seu dia a dia",
];

const typingElement = document.getElementById("typing-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!isDeleting) {

    // Digitando
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {

      // Se for a segunda frase → espera 8s e finaliza
      if (wordIndex === words.length - 1) {
        setTimeout(() => {
          typingElement.classList.add("no-cursor"); // 🔥 some cursor
        }, 8000);
        return; // 🔥 encerra definitivamente
      }

      // Primeira frase → apagar normalmente
      setTimeout(() => {
        isDeleting = true;
        typeEffect();
      }, 1500);

      return;
    }

  } else {

    // Apagando primeira frase
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex++;
    }
  }

  const speed = isDeleting ? 40 : 80;
  setTimeout(typeEffect, speed);
}

typeEffect();



  // =============================
  // TEXTOO TEMPORÁRIO
  // =============================





// // Lista de frases que serão exibidas no efeito de digitação
// const words = [
//   "Orbitta 11",
//   "Encontre sites e ferramentas úteis para o seu dia a dia",
//   // "Aproveite!",
// ];

// // Elemento HTML onde o texto será digitado
// const typingElement = document.getElementById("typing-text");

// // Índice da palavra atual no array
// let wordIndex = 0;

// // Índice do caractere atual dentro da palavra
// let charIndex = 0;

// // Controla se está apagando (true) ou digitando (false)
// let isDeleting = false;

// // Controla se a animação terminou definitivamente
// let finished = false;

// function typeEffect() {

//   // Se a animação já terminou, não executa mais nada
//   if (finished) return;

//   // Palavra atual baseada no índice
//   const currentWord = words[wordIndex];

//   // =============================
//   // MODO DIGITAÇÃO
//   // =============================
//   if (!isDeleting) {

//     // Mostra parte da palavra até o caractere atual
//     typingElement.textContent = currentWord.substring(0, charIndex + 1);
//     charIndex++;

//     // Se terminou de digitar a palavra
//     if (charIndex === currentWord.length) {

//       // Se for a segunda frase (índice 1)
//       if (wordIndex === 1) {

//         // Espera 8 segundos antes de começar a apagar
//         setTimeout(() => {
//           isDeleting = true;
//           typeEffect();
//         }, 8000);

//         return;
//       }

//       // Para outras palavras, espera 1.5s antes de apagar
//       setTimeout(() => {
//         isDeleting = true;
//         typeEffect();
//       }, 1500);

//       return;
//     }

//   } else {

//     // =============================
//     // MODO APAGAR
//     // =============================

//     // Remove um caractere por vez
//     typingElement.textContent = currentWord.substring(0, charIndex - 1);
//     charIndex--;

//     // Se apagou completamente a palavra
//     if (charIndex === 0) {

//       // Se for a segunda frase
//       if (wordIndex === 1) {

//         // Marca como finalizado
//         finished = true;

//         // 🔥 Adiciona classe para remover o cursor definitivamente
//         typingElement.classList.add("no-cursor");

//         return;
//       }

//       // Volta para modo digitação
//       isDeleting = false;

//       // Avança para próxima palavra
//       wordIndex++;
//     }
//   }

//   // Define velocidade:
//   // mais rápido ao apagar (40ms)
//   // mais lento ao digitar (80ms)
//   const speed = isDeleting ? 40 : 80;

//   // Chama novamente a função criando o loop da animação
//   setTimeout(typeEffect, speed);
// }

// // Inicia a animação
// typeEffect();



