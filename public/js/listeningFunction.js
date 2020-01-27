"use strict";

function startListening() {
  let audio = new Audio("/audios/nani.mp3");
  audio.play();
  let result;
  let recognition = new webkitSpeechRecognition();
  recognition.lang = "id-ID";
  recognition.interimResults = false;
  recognition.maxAlternatives = 5;
  recognition.start();

  //handle event
  recognition.onstart = function() {
    document.getElementById("keyword").innerHTML = "Listening...";
  };

  recognition.onerror = function() {
    document.getElementById("keyword").innerHTML =
      "Your voice will show up in here";
  };

  recognition.onnomatch = function() {
    document.getElementById("keyword").innerHTML =
      "Your voice will show up in here";
  };

  recognition.onresult = function(event) {
    console.log(
      "You said: ",
      event.results[0][0].transcript.trim().toLowerCase()
    );
    result = event.results[0][0].transcript.trim().toLowerCase();
    document.getElementById("keyword").innerHTML = result;

    if (result.indexOf("apa itu") > -1 && result.length > 7) {
      openNewTab("https://id.wikipedia.org/wiki/" + result.substr(8));
    }

    if (result.indexOf("berapa") > -1 && result.length > 6) {
      result = result.replace(",", ".");
      count(result.substr(7));
    }
  };
}
