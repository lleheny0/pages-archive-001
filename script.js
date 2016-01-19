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

var shows = [
  'Scrubs',
  'Game of Thrones',
  'Always Sunny',
  'The X Files',
  'Breaking Bad',
  'That 70s Show',
  'Arrested Development',
  'Modern Family'
];

var games = [
  'Minecraft',
  'Beyond Two Souls',
  'Far Cry 4',
  'Heavy Rain',
  'Kingdom Hearts',
  'Ni No Kuni',
  'Little Big Planet',
  'The Last of Us',
  'Animal Crossing',
  'Fallout 3',
  'Fallout New Vegas',
  'Mass Effect'
];

$(document).ready(function() {
  $('input[type=button]').click(function() {
    $('#title').html('');
  });
  $('#movie-button').click(function() {
    $('#title').html(movies[Math.floor(Math.random() * movies.length)]);
  });
  $('#show-button').click(function() {
    $('#title').html(shows[Math.floor(Math.random() * shows.length)]);
  });
  $('#game-button').click(function() {
    $('#title').html(games[Math.floor(Math.random() * games.length)]);
  });
});
