'use strict';

function startListening() {
  let audio = new Audio('/audios/nani.mp3')
  audio.play();
  let result;
  let recognition = new webkitSpeechRecognition();
  recognition.lang = "id-ID";
  recognition.interimResults = false;
  recognition.maxAlternatives = 5;
  recognition.start();

  //handle event
  recognition.onstart = function(){
    document.getElementById("word").innerHTML = "mendengarkan...";
  }

  recognition.onerror = function() {
    document.getElementById("word").innerHTML = "Suara kamu akan ditampilkan disini";
  }

  recognition.onnomatch = function() {
    document.getElementById("word").innerHTML = "Suara kamu akan ditampilkan disini";
  }

  recognition.onresult = function(event) {
    console.log('Kamu mengatakan : ', event.results[0][0].transcript);
    result = event.results[0][0].transcript
    document.getElementById("word").innerHTML = result;

    if (result.indexOf("Apa itu") > -1) {
      openNewTab("https://id.wikipedia.org/wiki/" + result.substr(8));
    }

    if (result.indexOf("berapa") > -1) {
      result = result.replace(",", ".");
      count(result.substr(7));
    }
  }
}
