// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "O zamanlar kalbim seni arayan sessiz bir melodiydi", time: 15 },
  { text: "Kuşların fısıltısında bile senin adın saklıydı", time: 18 },
  { text: "Güneş ağlamadan önce bile içimde senin sıcaklığın vardı", time: 27 },
  { text: "Gökyüzünden düşen her hayalim sana doğru süzülürdü", time: 32 },
  { text: "Su damlaları gibi narin ama gerçek bir hisle doluydum", time: 33 },
  { text: "Şu an neredeyim? Senin kalbinde kaybolmuş halde", time: 41 },
  { text: "Ellerimde titreyen umut değil, senin dokunuşunun izi var", time: 47 },
  { text: "Alacakaranlığa fazla gelen bir ışık gibisin bana", time: 54 },
  { text: "Çiçeklerin kokusunda bile seni hatırlıyorum", time: 59 },
  { text: "O görüntü… seni ilk gördüğüm anın büyüsü", time: 67 },
  { text: "Gerçekten güçlüydü, nefesimi bile unutturdu", time: 72 },
  { text: "Sessizlik, seni düşünürken bile fısıldayan bir huzur oluyor", time: 78 },
  { text: "Bulutlarda yaşamak değil, seninle yaşamak istiyorum", time: 83 },
  { text: "Şu an neredeyim? Senin gülüşünün içinde", time: 91 },
  { text: "Ellerimde artık yalnızlık değil, senin hayalin var", time: 97 },
  { text: "Alacakaranlığı bile kıskandıran bir ışık gibisin", time: 104 },
  { text: "Çiçeklerin aşkı bile senin kokunu taşıyor sanki", time: 108 },
  { text: "O zamanlar kalbim sessizdi, şimdi seninle şarkı söylüyor", time: 144 },
  { text: "Kuşların fısıltısında bile senin nefesin var", time: 148 },
  { text: "Güneş ağlamadan önce bile aklımdaydın", time: 153 },
  { text: "Gökyüzünden düşen her his seni sevdiğimi hatırlatıyor", time: 158 },
  { text: "Su damlaları gibi içime işleyen bir sıcaklıksın", time: 164 },
  { text: "Şu an neredeyim? Senin kalbine doğru yürürken", time: 169 },
  { text: "Ellerimde umut değil artık, senin adın var", time: 176 },
  { text: "Alacakaranlığa bile meydan okuyan bir ışığın var", time: 183 },
  { text: "Çiçeklerin nefesinde dolaşan o büyülü aşk sensin", time: 188 },
  { text: "Aşk.", time: 140 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);