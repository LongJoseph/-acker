//Punch sound
function playclip() {
if (navigator.appName == "joseph") {
if (document.all)
 {
  document.all.sound.src = "sound/Punch.mp3";
 }
}

else {
        {
            var audio = document.getElementsByTagName("audio")[0];
            audio.play();
        }
    }
}


