//# sourceURL=hex.js

function setupEvents() {
    $('#hex-input').on('input', function() {
        var color = $('#hex-input').val();
        $('#hex-display-text').css('color', '#' + color);
        $('#hex-display-background').css('color', 'white');
        $('#hex-display-background').css('background-color', '#' + color);
    });
}

$(document).ready(function() {
    setupEvents();
});
