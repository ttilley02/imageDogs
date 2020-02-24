'use strict';

//Calls on the entire cast of functions to create the dog images specified by user input
function getDogImage(howManydogs) {
  let numberCheck = isInt(howManydogs);
  if(howManydogs < 1 || howManydogs > 50 || numberCheck == false){
    alert('Please enter of number 1 through 50.');
  }
 
  else{
  fetch('https://dog.ceo/api/breeds/image/random/'+howManydogs)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Please try again.'));
  }
}



function displayResults(result) {
  console.log(result);
  $('img').html('');
  //creates dog collage for the nmber of dogs specified by the user
  let replacementsHtml= result.message;
  replacementsHtml.forEach(function(img){
  $('.results-img').append(
    `<img src='${img}' class='doggy' alt='randomDogImage'>`
  
  )
})



//$('.results-img').html(replacementsHtml);
//display the results section
$('.results').removeClass('hidden');
}
//grabs input (hopefully a intger 1-50) from user
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    console.log('WatchForm has ran!');
    let amount = $('.js-dogNumber').val();
    if (amount == ''){
      amount = 3;
    }
    $('.js-dogNumber').val('');


    getDogImage(amount);
  });
}

//checks to make sure the input is an integer
function isInt(value) {
  if (isNaN(value)) {
    return false;
  }
  var x = parseFloat(value);
  return (x | 0) === x;
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
