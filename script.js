function setupLinks(pages) {
    $.each(pages, function(index, element) {
        $('#nav-' + element).click(function() {
            $('#container').load(element + '.html');
        });
    });
}

$(document).ready(function() {
    setupLinks(['home', 'hex']);
    $('#container').load('home.html');
});
