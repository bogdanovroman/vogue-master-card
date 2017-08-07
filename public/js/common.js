(function ($) {
    $.fn.customerPopup = function (e, intWidth, intHeight, blnResize) {
        e.preventDefault();

        intWidth = intWidth || '500';
        intHeight = intHeight || '400';
        strResize = (blnResize
            ? 'yes'
            : 'no');

        var strTitle = ((typeof this.attr('title') !== 'undefined')
                ? this.attr('title')
                : 'Social Share'),
            strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,
            objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
    }

    $(document).ready(function ($) {
        $('.share').on("click", function (e) {
            $(this).customerPopup(e);
        });

        $('.city a img').plate({inverse: false, perspective: 500, maxRotation: 10, animationDuration: 200})

        $('.menu-btn').on("click", function () {
            $('.aside').addClass('active');
            $('html, body').addClass('ovh');
        });

        $('.back-btn').on("click", function () {
            $('.aside').removeClass('active');
            $('html, body').removeClass('ovh');
        });

        var height = $('.city.main .city-map').outerHeight();

        $(window).scroll(function () {

            var st = $(this).scrollTop();

            if (st >= 100) {
                $('.city.main .city-map').css({'height': 0});
            } else {
                $('.city.main .city-map').css({'height': height});
            }

            var scrolledElement = $('.with-video');
            var scrolledElementHeight = scrolledElement.height();
            var toFixedPoint = scrolledElementHeight + scrolledElement.offset().top;

            if (st >= toFixedPoint) {
                scrolledElement.addClass('fixed-active');
            } else {
                scrolledElement.removeClass('fixed-active');
            }

        });

    });

}(jQuery));


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: document.querySelector('#player').dataset.iframe,
        playerVars: {
            loop: 1,
            showinfo: 0,
            modestbranding: 1,
            rel: 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {

}

var done = false;

function onPlayerStateChange(event) {
    var classes = document.querySelector('.with-video').className;
    if (event.data == 1) {
        document.querySelector('.with-video').className += ' fixed-on-scroll';
    } else {
        document.querySelector('.with-video').className = 'with-video narrow';
    }
}

function stopVideo() {
    player.stopVideo();
}
