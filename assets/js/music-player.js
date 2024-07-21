let beat = new Audio("./img/bg-music.mp3");
let isPlaying = false;
beat.volume = 0.5;
beat.loop = true;
beat.play();
const musicBtn = document.getElementById("musicBtn");
const musicImage = document.getElementById("musicImage");
musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    musicImage.src = "./img/music-mute.svg";
    beat.pause();
    isPlaying = false;
  } else {
    musicImage.src = "./img/music.svg";
    isPlaying = true;
    beat.play();
  }
});
