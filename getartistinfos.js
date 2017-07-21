$(document).on('change', 'select', function () {

    var country = $(this).val();
    var limit = 6;
    var apiKey = 'e9ea677a6aeed784c1b9fa2919e17347';
    var format = 'json';
    var args = '';
    args += 'country=' + country;
    args += '&limit=' + limit;
    args += '&api_key=' + apiKey;
    args += '&format=' + format;
    $.getJSON('http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists', args, showTopArtists);

});

function showTopArtists(lastfmData) {

    $('.resultbox a').remove();
    $.each(lastfmData.topartists.artist, function (idx, art) {

        var artname = art.name;
        var image = art.image[2]["#text"];

        $(".resultbox").append('<a href="https://de.wikipedia.org/wiki/' + artname + '" target="_blank"><img src="' + image + '"></a>');
    });
    
    $(".smallText").css("visibility", "visible");
};
