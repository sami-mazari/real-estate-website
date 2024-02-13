window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 30) {
        navbar.style.backgroundColor = '#072C61';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});
document.addEventListener("DOMContentLoaded", function() {
    let hearts = document.getElementsByClassName("fa-heart");
  
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].addEventListener("click", function () {
        this.classList.toggle("clr");
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');
    video.removeAttribute('controls');
    var playButton = this.getElementsByClassName("fa-play")[0];

    playButton.addEventListener('click', function () {
      if (video.paused) {
        video.play();
        playButton.classList.add("fa-pause");
        playButton.classList.remove("fa-play");
      } else {
        video.pause();
        playButton.classList.add("fa-play");
        playButton.classList.remove("fa-pause");
      }
    });    
  });