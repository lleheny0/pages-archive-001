/* global $ */

var data = {
  '#movie-button' : [
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
    'Fargo',
    'Yellow Submarine',
    'Alice',
    'Neverland',
    'Tin Man'
  ],
  '#game-button' : [
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
    'Mass Effect',
    'Bioshock Infinite',
    'Skyrim'
  ],
  '#show-button' : [
    'Scrubs',
    'Game of Thrones',
    'Always Sunny',
    'The X Files',
    'Breaking Bad',
    'That 70s Show',
    'Arrested Development',
    'Modern Family',
    'Rick and Morty'
  ],
  '#chore-button' : [
    'Laundry',
    'Dishes',
    'Organizing',
    'Sweeping',
    'Fridge',
    'Trash',
    'Shopping',
    'Bills',
    'Bathtub'
  ]
};

$(document).ready(function() {
  $.each(data, function(tag, titles) {
    $(tag).click(function() {
      $('#title').html(titles[Math.floor(Math.random() * titles.length)]);
    });
  });
});
