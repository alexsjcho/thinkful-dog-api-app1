"use strict";

function getDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random/3")
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

// function userNumChoice() {
//   let photoRender = ;
// }

function watchGetDogButton() {
  $("#get" || "#request").submit(e => {
    e.preventDefault();
    let userNumInput = $("#dog-num").val();
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  getDogImage();
});

//Full Implementation

// function getDogImage() {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(responseJson => displayResults(responseJson))
//     .catch(error => alert("Something went wrong. Try again later."));
// }

// function displayResults(responseJson) {
//   console.log(responseJson);
//   //replace the existing image with the new one
//   $(".dog-img-results").replaceWith(
//     `<img src="${responseJson.message}" class="results-img">`
//   );
//   //display the results section
//   $(".results").removeClass("hidden");
// }
