'use strict'

function openNewTab(url) {
  document.getElementById("jawaban").innerHTML = "Menuju wikipedia";
  let win = window.open(url, '_blank');
  win.focus();
}

function count(value) {
  let result = eval(value);
  document.getElementById("jawaban").innerHTML = result;
}
