// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();
function init() {
  //Get all the required variables
  const selectEle = document.getElementById("horn-select");
  const imgSelect = document.getElementsByTagName("img");
  const audioEle = document.getElementsByTagName("audio");
  const playButton = document.getElementsByTagName("button");
  const soundEle = document.getElementById("volume");
  let partyHorn = false;

  selectEle.addEventListener("change",(event)=> {
    //Set image based on event value
    if (event.target.value == "air-horn")
    {
      imgSelect[0].src = "assets/images/air-horn.svg";
      audioEle[0].src = "assets/audio/air-horn.mp3";
      partyHorn = false;
    }else if (event.target.value == "car-horn")
    {
      imgSelect[0].src = "assets/images/car-horn.svg";
      audioEle[0].src = "assets/audio/car-horn.mp3";
      partyHorn = false;
    }else if (event.target.value == "party-horn")
    {
      imgSelect[0].src = "assets/images/party-horn.svg";
      audioEle[0].src = "assets/audio/party-horn.mp3";
      partyHorn = true;
    }
  });

  soundEle.addEventListener("change", (event)=>{
    if (event.target.value == 0)
    {
      imgSelect[1].src = "assets/icons/volume-level-0.svg";
    }else if (event.target.value < 33)
    {
      imgSelect[1].src = "assets/icons/volume-level-1.svg";
    }else if (event.target.value < 67)
    {
      imgSelect[1].src = "assets/icons/volume-level-2.svg";
    }else
    {
      imgSelect[1].src = "assets/icons/volume-level-3.svg";
    }
    audioEle[0].volume = event.target.value / 100;
  });

  //Sets the button to play on click
  playButton[0].addEventListener("click",()=>{
    audioEle[0].play();
    if (partyHorn)
    {
      jsConfetti.addConfetti();
    }
  });
}