var data = {
    '#movie-button': [
        'American Beauty',
        'Whisper of the Heart',
        'Mouse Hunt',
        'Lord of the Rings',
        //'Chicken Run',
        'Memento',
        'Shawshank Redemption',
        'Shutter Island',
        'Hook',
        'Jumanji',
        'Zathura',
        //'Clockwork Orange',
        'Men Who Stare At Goats',
        'Inglorious Basterds',
        'Up in the Air',
        'A Bug\'s Life',
        'Your Highness',
        'Invasion of the Body Snatchers',
        'Only Yesterday',
        'The Cat Returns',
        'Princess Kaguya',
        'Young Frankenstein',
        'Blazing Saddles',
        'Santa Clause',
        'Meet the Patels'
        //'Home Alone 2',
        //'Home Alone',
        //'Rush Hour',
        //'Dreams',
        //'Scoop',
        //'Burn After Reading',
        //'Hannibal\'s Netflix Thing',
        //'Porco Rosso',
        //'Fargo'
        //'Be Kind Rewind',
        //'Yellow Submarine',
        //'Interstellar',
        //'Borat'
    ],
    '#game-button': [
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
        'Skyrim',
        'Who\'s Your Daddy',
        'Thief',
        'Dark Souls',
        'Eldritch'
    ],
    '#show-button': [
        'Scrubs',
        'Game of Thrones',
        'Always Sunny',
        'The X Files',
        'Breaking Bad',
        'That 70s Show',
        'Arrested Development',
        'Modern Family',
        'Rick and Morty',
        'Fawlty Towers',
        'Adventure Time',
        'Alice',
        'Neverland',
        'Tin Man'
    ],
    '#chore-button': [
        'Laundry',
        'Dishes',
        'Organizing',
        'Sweeping',
        'Fridge',
        'Trash',
        'Shopping',
        'Bills',
        'Bathtub',
        'Clean car'
    ]
};

$(document).ready(function () {
    $.each(data, function (tag, titles) {
        $(tag).click(function () {
            $('#title').html(titles[Math.floor(Math.random() * titles.length)]);
        });
    });
});
