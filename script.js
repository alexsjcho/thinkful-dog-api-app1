"use strict";

let numInput = parseInt(watchUserInput);

function getDogImage(numInput) {
  if (numInput < 3) {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
  } else if (numInput > 50) {
    return alert("Please choose a number equal or less than 50");
  } else {
    fetch(`https://dog.ceo/api/breeds/image/random/${numInput}`)
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
  }
}

function watchUserInput() {
  $("#dog-num-form").submit(e => {
    e.preventDefault();
    let userNumInput = $("#num-dog").val();
    getDogImage(userNumInput);
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchUserInput();
});
