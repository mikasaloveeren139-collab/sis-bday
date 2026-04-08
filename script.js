const intro = document.querySelector(".intro");

window.addEventListener("load", () => {
  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.transition = "1s";

    setTimeout(() => {
      intro.style.display = "none";
    }, 1000);

  }, 2500);
});








const btn = document.querySelector(".surprise-btn");
const msg = document.querySelector(".hidden-message");
const music = document.getElementById("bg-music");

btn.addEventListener("click", () => {
    // show message
    msg.style.opacity = "1";
    msg.style.maxHeight = "200px";

    // play music 🎵
    music.currentTime = 25; // restart music if already playing
    music.volume = 0.8;
    music.play();
    // stop
    setTimeout(() => {
        music.pause();
    }, 30000); // stop after 30 seconds

    // confetti 🎉
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});
