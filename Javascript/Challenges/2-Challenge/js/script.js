const video = document.getElementById("video");

function avancar() {
  video.currentTime += 15;
}

function avancar() {
  video.currentTime -= 15;
}
function play() {
  video.play();
}

function stop() {
  video.pause();
  video.currentTime = 0;
}

function aumentarVelocidade() {
  video.playbackRate += 0.1;
}

function diminuirVelocidade() {
  video.playbackRate -= 0.1;
}