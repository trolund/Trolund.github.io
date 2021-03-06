var pro = 1;
var viewportWidth;

function AutoMenuUpdate(Htag, des, aniTime) {
    var name = '';
    var id = "";
    $("article " + Htag).each(function () {

        // create menu
        name = $(this).text().replace(" ", "");

        var aTag = '<li><a data="' + name + '"  class="' + name + 'Link " href="#' + name + '">' + $(this).text() + '</a></li>';

        $('#' + des).append(aTag);

        // give tags id's

        $(this).attr('id', name);
    })

    $(".mobilNav ul").html($('#' + des).html());

    /*$("article " + Htag).each(function () {
        // ani
        $("." + name + "Link").click(function () {
            id = $(this).attr('data');;
            console.log('Go to: ' + id);
            $('html, body').animate({
                scrollTop: $('#' + id).offset().top - 80
            }, aniTime);

        })
    })*/

    $("#nav > ul > li > a").each(function () {
        $(this).click(function () {
            id = $(this).attr('data');
            console.log('Go to: ' + id);
            $('html, body').animate({
                scrollTop: $('#' + id).offset().top - 80
            }, aniTime);
        });
    });

    $(".mobilNav > ul > li > a").each(function () {
        $(this).click(function () {
            id = $(this).attr('data');
            console.log('Go to: ' + id);
            $('html, body').animate({
                scrollTop: $('#' + id).offset().top - 80
            }, aniTime);
        });
    });

    $('nav a').each(function () {
        if ($(this).is(':last-child')) {
            $(this).after('');
        } else {
            $(this).after(' I ');
        }


    });

}

function setUpRevealAni(aniTime) {

    // Changing the defaults
    window.sr = ScrollReveal({
        reset: true
    });

    // set up for all articles
    $('article').each(function () {
        if ($(this).parent().hasClass('farvebg')) {
            sr.reveal($(this).parent()), {
                duration: aniTime
            };
        } else {
            sr.reveal($(this)), {
                duration: aniTime
            };
        }
    });

    sr.reveal('.footer', {
        duration: aniTime
    });

}

function newsBox() {
    $('.newsContainer>div:last-child').addClass('newsShow');
    $('.newsContainer div:not(.newsShow)').css({
        width: 60
    }, 2000);
    $('.newsContainer>div:last-child').css({
        width: '100%'
    }, 2000);


    $('.newsContainer>div').hover(function (evt) {
        $('.newsShow').removeClass('newsShow').css({
            width: 60
        }, 200);;
        $(this).addClass('newsShow').css({
            width: '100%'
        }, 200);

    });



}

$(document).ready(function () {

    $(".mobilNav").hide();
    // tjek om det er en mobil enhed
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".header").css('background-attachment', 'scroll');
        console.log('mobil enhed');
    } else {
        console.log('ikke en mobil enhed');
    }

    flipcontainerAni();
    addAnimationTimeline();
    AOS.init(); // all AOS animationer før dette ---------!

    viewportWidth = $(window).width();
    var headerheigt = $('header').height() + $('.somedia').height() * pro;
    var smallHeader = 90;
    var menuPX = $('header').height();
    var scrollcount = 0;

    // set up scolllinks på side.
    $("a[data]").click(function () {
        scrollLinkAni($(this));
    })

    $('#mailBut').click(function () {
        console.log("try to sent mail");


    })

    AutoMenuUpdate('h1', 'navUl', 800);
    //setUpRevealAni(200);
    newsBox();
    flipcardsgen();
    timelineJS();
    printAge();
    svgAnimationSetup();


    $('#goToTopBut').hide();
    $('#goToTopBut').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    $(window).resize(function () {
        viewportWidth = $(window).width();
        menuPX = $('header').height();

        if (viewportWidth > 1280) {
            headerheigt = 500 + $('.somedia').height() * pro;
            smallHeader = 90;
            menuPX = $('.somedia').position().top;
        } else if (viewportWidth < 1280 && viewportWidth >= 1024) {
            headerheigt = 400 + $('.somedia').height() * pro;
            smallHeader = 75;
        } else if (viewportWidth < 1024 && viewportWidth >= 768) {
            headerheigt = 300 + $('.somedia').height() * pro;
            smallHeader = 70;
        } else if (viewportWidth < 768 && viewportWidth >= 480) {
            headerheigt = 260 + $('.somedia').height() * pro;
            smallHeader = 65;
        } else {
            headerheigt = 260 + $('.somedia').height() * pro;
            smallHeader = 60;
        }

        menuPX = $('header').height();


        if (viewportWidth > 599) {
            $(".mobilNav").hide();
            $(".containerMenuIcon").removeClass("change");
            mobilmenuvis = true;
        }

    });

    AOSRefeCount = 0;

    var menuBoxh = $('.menuBox').height();


    $(window).bind('scroll', function () {

        if ($(window).scrollTop() > headerheigt - 20 && mobilmenuvis) {
            $('.mobilNav').slideDown(250);
            $(".containerMenuIcon").addClass("change");

        } else {
            if (!(viewportWidth < 600)) {
                $('.mobilNav').slideUp(150);
                $(".containerMenuIcon").removeClass("change");
            }
        }

        /*   if ($(window).scrollTop() > menuPX + 140) {
            scrollcount++;
            $('.header').css('clip-path', 'none');
            $('.space').css('height', menuBoxh);
            $('.space').css('display', 'block');
            $('.profilimg').addClass('displayNone');
            $('.somedia').hide(200);
            $('.menuBox').addClass('fixedMenu');
            $('.menuBox').addClass('notransition');
            $('.profilimg').removeClass('ani4');
            $('.somedia').removeClass('ani');
            $('.menuBox').removeClass('ani');
            $('#name').removeClass('ani2');
            $('#titel').removeClass('ani2');
            $('#goToTopBut').slideDown(200);

        } else {
            $('.space').css('display', 'none');
            $('.space').css('height', 0);
            $('.profilimg').removeClass('displayNone');
            $('.somedia').show(200);
            $('.menuBox').removeClass('fixedMenu');
            $('.menuBox').removeClass('notransition');
            $('#goToTopBut').slideUp(200);
            $('.header').css('clip-path', 'polygon(0px 0px, 100% 0px, 100% calc(100% - 5vw), 0px 100%)');
            if (scrollcount >= 1) {
                $('.profilimg').addClass('ani4');
                $('.somedia').addClass('ani');
                $('.menuBox').addClass('ani');
                $('#name').addClass('ani2');
                $('#titel').addClass('ani2');
            }

        }
*/
        ActiveLinksUpdate();
        AOSRefeCount++;
        if (AOSRefeCount > 50) {
            AOS.refresh();
            AOSRefeCount = 0;
        }
    });
});

function svgAnimationSetup() {
    // define images
    var images = [
            "assets/img/svg%20animation/Artboard%201.svg",
            "assets/img/svg%20animation/Artboard%202.svg",
            "assets/img/svg%20animation/Artboard%203.svg",
            "assets/img/svg%20animation/Artboard%204.svg",
            "assets/img/svg%20animation/Artboard%205.svg",
            "assets/img/svg%20animation/Artboard%206.svg",
            "assets/img/svg%20animation/Artboard%207.svg",
            "assets/img/svg%20animation/Artboard%208.svg",
            "assets/img/svg%20animation/Artboard%209.svg",
            "assets/img/svg%20animation/Artboard%2010.svg"
        ];

    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var obj = {
        curImg: 0
    };

    // create tween
    var tween = TweenMax.to(obj, 0.5, {
        curImg: images.length - 1, // animate propery curImg to number of images
        roundProps: "curImg", // only integers so it can be used as an array index
        repeat: 0, // repeat 3 times
        immediateRender: true, // load first image automatically
        ease: Linear.easeNone, // show every image the same ammount of time
        onUpdate: function () {
            $("#myimg").attr("src", images[obj.curImg]); // set the image source
            if (obj.curImg >= 9) {
                $('#revealText').css('opacity', 1);
                //console.log('text synlig');
            } else {
                $('#revealText').css('opacity', 0);
            }

        }
    });



    // init controller
    var controller = new ScrollMagic.Controller();

    // build scene
    var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger",
            duration: 250
        })
        .setTween(tween)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
}

function ActiveLinksUpdate() {

    /* update aktiv linkes */

    mostVisible = getMostVisible($("article"));

    mostVisibleH1 = mostVisible.find("h1:first");

    nameH1 = mostVisibleH1.text().replace(" ", "");

    // console.log(nameH1);

    $('nav a').each(function () {
        if (!$('.' + nameH1 + 'Link').is($(this))) {
            $(this).removeClass('activeLink');
        }
    })

    if (!$('.' + nameH1 + 'Link').hasClass('activeLink')) {
        $('.' + nameH1 + 'Link').addClass('activeLink');
    }


}

function getMostVisible($elements) {
    var $element = $(),
        viewportHeight = $(window).height(),
        max = 0;

    $elements.each(function () {
        var visiblePx = getVisibleHeightPx($(this), viewportHeight);

        if (visiblePx > max) {
            max = visiblePx;
            $element = $(this);
        }
    });

    return $element;
}

function getVisibleHeightPx($element, viewportHeight) {
    var rect = $element.get(0).getBoundingClientRect(),
        height = rect.bottom - rect.top,
        visible = {
            top: rect.top >= 0 && rect.top < viewportHeight,
            bottom: rect.bottom > 0 && rect.bottom < viewportHeight
        },
        visiblePx = 0;

    if (visible.top && visible.bottom) {
        // Whole element is visible
        visiblePx = height;
    } else if (visible.top) {
        visiblePx = viewportHeight - rect.top;
    } else if (visible.bottom) {
        visiblePx = rect.bottom;
    } else if (height > viewportHeight && rect.top < 0) {
        var absTop = Math.abs(rect.top);

        if (absTop < height) {
            // Part of the element is visible
            visiblePx = height - absTop;
        }
    }

    return visiblePx;
}

function flipcardsgen() {
    $('.flipper').each(function () {
        front = $(this).find('.front');
        h2 = front.find('h2');
        back = $(this).find('.back');
        back.prepend('<h2>' + h2.text() + '</h2>');
    })
}

function timelineJS() {

    // define variables
    var items = $(".timeline li");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    items.each(function () {
        $(".kurser", this).hide();
        $(this).click(function () {
            $(".kurser", this).toggle(200);




        });
    });
}

function addAnimationTimeline() {
    count = 0;
    $('.timeline div').each(function () {
        if (count % 2 == 0) {
            $(this).attr('data-aos', 'zoom-in-right'); // data-aos="zoom-in-right"
            hovertimeline($(this), true);
        } else {
            $(this).attr('data-aos', 'zoom-in-left');
            hovertimeline($(this), false);
        }
        $(this).attr('data-aos-once', 'true');
        count++;
    })
}

function hovertimeline(element, even) {
    // add hover til elementer som kan klikkes på.
    if (element.find(".kurser").length > 0) {
        element.css('cursor', 'pointer');
        element.addClass('timelinehover');

        /*
        elementer.mouseenter(function () {

            if ($(".kurser", this).is(":hidden")) {
                if (even) {
                    elementer.css("border-right", "0px solid orange").animate({
                        'borderWidth': '5px',
                        'borderColor': 'orange'
                    }, 200);
                } else {
                    if (viewportWidth <= 600) {
                        elementer.css("border-right", "0px solid orange").animate({
                            'borderWidth': '5px',
                            'borderColor': 'orange'
                        }, 200);
                    } else {
                        elementer.css("border-left", "0px solid orange").animate({
                            'borderWidth': '5px',
                            'borderColor': 'orange'
                        }, 200);
                    }
                }
                elementer.css('box-shadow', 'none').animate({
                    'boxShadow' : '0px 0px 10px #000'
                }, 200);
            }

            elementer.css('box-shadow', 'none').animate({
                    'boxShadow' : '0px 0px 10px #000'
                }, 200);
        }).mouseleave(function () {

            elementer.animate({
                'borderWidth': '0px',
                'borderColor': 'orange',
            }, 200);

            elementer.css('box-shadow', 'none');
        });*/

    }

}

function printAge() {
    var d = new Date();
    var year = d.getFullYear();
    var day = d.getDate();
    var month = d.getMonth() + 1; // for some reason +1?

    numOfyears = year - 1994;

    if (month < 10) {
        numOfyears--;
    } else if (month == 10) {
        if (day < 6) {
            numOfyears--;
        }
    }

    $('#age').prepend(numOfyears);
    $('#textage').prepend(numOfyears);

}

function flipcontainerAni() {
    $('.flip-container').each(function () {
        $(this).attr('data-aos', 'zoom-in-up');
        $(this).attr('data-aos-once', 'true');
    })
}

function scrollLinkAni(element) {
    id = element.attr('data');
    console.log(id);
    $('html, body').animate({
        scrollTop: $('#' + id).offset().top - 80
    }, 500);
}

var mobilmenuvis = true;

// responsive menu icon
function mobilMenu(x) {
    //x.classList.toggle("change");
    //$(".mobilNav").toggle(200);
    if ($(".mobilNav").is(":visible")) {
        $(".mobilNav").slideUp(150);
        mobilmenuvis = false;
        x.classList.remove("change");
    } else {
        $(".mobilNav").slideDown(250);
        mobilmenuvis = true;
        x.classList.add("change");
    }
}

$(window).on('load', function () { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
    //    $('#name').delay(500).addClass('animated');
    //    $('#titel').delay(500).addClass('animated');
});
