
"use strict";

var counter = 0;
var relatedArtists;
var randomIndex = Math.floor(Math.random()*20);


var showMe = function(recommended){
  if(counter == 0){
    $('.return a').attr('href', recommended.url).text(recommended.name);
    $('.recommends').fadeIn(250);
    counter++;
  }
  else {
    $('.return a').slideUp(200);
    setTimeout(function(){
      $('.return a').attr('href', recommended.url).text(recommended.name);
      $('.return a').slideDown();
    }, 400);
  };
};




var getRequest = function(seed){
  var params = {
    limit : 20,
    artist : seed,
    autocorrect : 1,
    api_key : "626b1562c51f1e5886ed755a63528443",
    format : "json"
  };
  var url = "//ws.audioscrobbler.com/2.0/?method=artist.getsimilar"

  $.getJSON(url, params, function(data){
    if(data.error){
      $('.recommends').hide();
      $('.errors').slideDown(200);
      counter = 0;
    }
    else{
      relatedArtists = data.similarartists.artist;
      // var randomize = Math.floor(Math.random()*20);
      // showMe(data.similarartists.artist[randomize]);
      randomSelection(relatedArtists);
    }
  });
}

var randomSelection = function(array){
  randomIndex = Math.floor(Math.random()*20);
  showMe(array[randomIndex]);
}




$(document).ready(function(){

    $('.seed').submit(function(e){
      e.preventDefault();
      var seed = $('.seed input').val();
      $('.errors').hide();
      getRequest(seed);
      $('.seed input').blur();
    });

    $('.seed input').on('click', function(){
      $('.seed input').val("");
    });

    $('body').on('click', '.another', function(){
      showMe(relatedArtists[randomIndex + 1]);
      randomIndex = Math.floor(Math.random()*19);
    });

    $('.moreinfo').click(function(){
      $('.info').slideToggle(200);
    })


})
