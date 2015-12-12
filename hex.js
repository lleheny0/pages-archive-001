function setupEvents() {
    $('#hex-input').on('input', function() {
        var color = $('#hex-input').val();
        if (color.length === 7) {
            color = color.split('#')[1];
        }
        $('#hex-display-text').css('color', '#' + color);
        $('#hex-display-background').css('color', 'white');
        $('#hex-display-background').css('background-color', '#' + color);
    });
}

$(document).ready(function() {
    setupEvents();
});
