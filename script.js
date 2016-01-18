/* global $ */

var movies = [
  'Mouse Hunt',
  'Lord of the Rings',
  'Chicken Run',
  'Memento',
  'Shawshank Redemption',
  'Scoop',
  'Shutter Island',
  'Hook',
  'Jumanji',
  'Zathura',
  'American Beauty',
  'Clockwork Orange',
  'Be Kind Rewind',
  'Fargo'
];

$(document).ready(function() {
  $('input[type=button]').click(function() {
    $('#title').html('');
  })
  $('#movie-button').click(function() {
    $('#title').html(movies[Math.floor(Math.random() * movies.length)]);
  });
});
