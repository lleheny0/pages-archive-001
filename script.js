function chooseTextColor(hex) {
}

$(document).ready(function() {
    $('#color-input').on('input', function() {
        $('#color-input-card').css('background-color', '#' + $('#color-input').val())
    });
});
