// Ambil elemen audio, tombol play/pause, dan elemen lirik
const audio = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const lyricsElement = document.getElementById('lyrics');

// Data lirik dengan waktu sinkronisasi (dalam detik)
const lyricsData = [
  { time: 0, text: "🎵" },
  { time: 6, text: "Tanpa Kusadar😵 Ku mulai Bertanya🤔" },
  { time: 14, text: "Jika terulang akankah sama?🤔" },
  { time: 23, text: "Merah bibir kamu💋, kau pun lirik aku👀" },
  { time: 27, text: "Tepat di bawah lampu🪔, kubisikkan kamu🤫"},
  { time: 31.30, text: "Apa yang kaumau?🥱"},
  { time: 33, text: "Dia atau aku?🤤 Garam atau madu?😂"},
  { time: 38, text: "Hold my hands✋, don't, don't tell your friends🥴"},
  { time: 41, text: "Cerita kemaren📖, kuingat permanen👻"},
  { time: 45, text: "Manismu kaya permen🍬, I hope this never end💀"},
  { time: 49, text: "Oh, can you be my Gwen?🤍 And I'll be the Spiderman🕷️"},
  { time: 52, text: "Sakit dadaku💔, ku mulai merindu😢"},
  { time: 56, text: "Kubayangkan🤔 jika kamu tidur di sampingku👩‍❤️‍👨"},
  { time: 60, text: "Di malam yang semu😴, pejamkan mataku😖"},
  { time: 64, text: "Kubayangkan tubuhmu jika di pelukanku🤗"},
  { time: 69, text: "Sakit dadaku💔, ku mulai merindu😢"},
  { time: 72, text: "Kubayangkan🤔 jika kamu tidur di sampingku👩‍❤️‍👨"},
  { time: 76, text: "Di malam yang semu😴 dan kupejamkan mataku😖"},
  { time: 80, text: "Kubayangkan tubuhmu jika di pelukanku🤗"},
  { time: 85, text: "Malam🌠chaos ini⚔️, ku terasa sepi😭"},
  { time: 89, text: "Ku tak mau sendiri🤒, I need you here with me🥰"},
  { time: 92, text: "Aku pilih madu🍯, manis kayak kamu🐻"},
  { time: 97, text: "Ji, ro, lu"},
  { time: 99, text: "~"},
  { time: 100, text: "Wanna tell my friends 'bout you🫵"},
  { time: 102, text: "Tapi tunggu dulu🛑, ku masih meragu🙄"},
  { time: 106, text: "Kamu menggebu😈, wanna be with you🤧"},
  { time: 109, text: "But jalani dulu🚗, oh"},
  { time: 113, text: "Wanna be with you🤧"},
  { time: 114, text: "Sakit Dadaku💔, Ku mulai merindu😢"},
  { time: 117, text: "Kubayangkan jika kamu tidur di sampingku🤗"},
  { time: 121, text: "Di malam yang semu😴 dan kupejamkan mataku😖"},
  { time: 125, text: "Kubayangkan🤔 tubuhmu jika di pelukanku🤗"},
  { time: 130, text: "Sakit dadaku💔, ku mulai merindu😢"},
  { time: 134, text: "Kubayangkan jika kamu tidur di sampingku🤗"},
  { time: 138, text: "Di malam yang semu😴, pejamkan mataku😖"},
  { time: 141, text: "Kubayangkan🤔 tubuhmu jika di pelukanku🤗"},
  { time: 145, text: "Mode joget💃 batu bara🤩"},
  { time: 147, text: "😎"},
  { time: 151, text: "😌"},
  { time: 153, text: "👑Gua Jemsii"},
  { time: 155, text: "😂"},
  { time: 157, text: "✋😎🤚"},
  { time: 160, text: "🤩"},
  { time: 162, text: "Yang kumau👨🏻 cuma kamu👩🏻"},
  { time: 166, text: "Yang kaumau👩🏻 cuma aku👨🏻"},
  { time: 170, text: "Yang kumau👨🏻 cuma kamu👩🏻"},
  { time: 173, text: "Yang kaumau👩🏻 cuma aku👨🏻"},
  { time: 180, text: "Subrek TGgaming35"},
  // Tambahkan lebih banyak data lirik sesuai durasi lagu
];

// Fungsi untuk mengubah lirik berdasarkan waktu
function updateLyrics() {
  const currentTime = audio.currentTime; // Waktu yang sedang diputar
  for (let i = 0; i < lyricsData.length; i++) {
    if (currentTime >= lyricsData[i].time) {
      lyricsElement.textContent = lyricsData[i].text; // Ganti lirik yang ditampilkan
    }
  }
}

// Fungsi untuk play/pause musik
playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();  // Mulai musik
    playPauseButton.textContent = 'Pause';  // Ubah teks tombol menjadi 'Pause'
  } else {
    audio.pause(); // Hentikan musik
    playPauseButton.textContent = 'Play';  // Ubah teks tombol menjadi 'Play'
  }
});

// Setiap kali waktu berubah, perbarui lirik
audio.addEventListener('timeupdate', updateLyrics);
