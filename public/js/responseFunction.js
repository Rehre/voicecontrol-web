"use strict";

function openNewTab(url) {
  document.getElementById("response").innerHTML = "Opening wikipedia";
  let win = window.open(url, "_blank");
  win.focus();
}

function count(value) {
  let result = eval(value);
  document.getElementById("response").innerHTML = result;
}
