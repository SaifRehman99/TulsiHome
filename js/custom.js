$(window).scroll(function() {
    if ($(window).scrollTop() >= 45) {
        $('.header').addClass('fixed-header');
        $('.menu1').addClass('fixed_header');
    } else {
        $('.header').removeClass('fixed-header');
        $('.menu1').removeClass('fixed_header');
    }
});


var forEach = function(t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++)
            o.call(r, t[e], e, t)
};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
            this.classList.toggle("is-active");
        }, false);
    });
}
$('.hamburger').click(function() {
    if ($(this).hasClass('is-active')) {
        $('#mySidenav').css('left', '0px');
    } else {
        $('#mySidenav').css('left', '-250px');
    }
});

if ($(window).width() <= 767) {
    $('#heading1').insertBefore($('#rightF1'));
}

if ($(window).width() <= 767) {
    $('#heading2').insertBefore($('#rightF2'));
}

if ($(window).width() <= 767) {
    $('#heading3').insertBefore($('#rightF3'));
}

if ($(window).width() <= 767) {
    $('#netRight').insertBefore($('#netLeft'));
}

if ($(window).width() <= 767) {
    $('#rightWhite').insertBefore($('#leftWhite'));
}

if ($(window).width() <= 767) {
    $('#rightCrypto').insertBefore($('#leftCrypto'));
}

function makeTimer() {

    var endTime = new Date("11 June 2018 07:00:00 GMT+05:30");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") {
        hours = "0" + hours;
    }
    if (minutes < "10") {
        minutes = "0" + minutes;
    }
    if (seconds < "10") {
        seconds = "0" + seconds;
    }

    $("#days").html(days + "<span>Day</span>");
    $("#hours").html(hours + "<span>Hour</span>");
    $("#minutes").html(minutes + "<span>Min</span>");
    $("#seconds").html(seconds + "<span>Sec</span>");

}
setInterval(function() {
    makeTimer();
}, 1000);

if ($(window).width() > 768) {
    $(document).ready(function() {
        $('.pointImg').hide();
        $('.pointImga').show();
        $('.clickme').click(function() {
            var type = $(this).data('type');
            $('.pointImg').hide();
            $('.points').removeClass('active');
            $('.points' + type).addClass('active');
            $('.pointImg' + type).show();
            //$('.clickme').removeClass('active');

            // $(this).addClass('lel').delay(100).queue(function(){
            $(this).css("height", "0%");


            $(this)
                .delay(100)
                .queue(function(next) {
                    $(this).addClass('active');
                    $(this).css("height", "33.33%");
                    next();
                });

            // $(this).removeClass('lel'); 
            //  next();
            //});

        });
    });
}

if ($(window).width() >= 768) {
    $(document).ready(function() {
        var pointsHeight = $(".points").outerHeight(true);
        $(".clickme").css("height", pointsHeight);
    });
}

if ($(window).width() < 768) {
    $(document).ready(function() {
        var bigimage = $("#big");
        var thumbs = $("#thumbs");
        //var totalslides = 10;
        var syncedSecondary = true;

        bigimage
            .owlCarousel({
                items: 1,
                slideSpeed: 2000,
                nav: false,
                autoplay: false,
                slideBy: 1,
                dots: false,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                loop: true
            })
            .on("changed.owl.carousel", syncPosition);

        thumbs
            .on("initialized.owl.carousel", function() {
                thumbs
                    .find(".owl-item")
                    .eq(0)
                    .addClass("current");
            })
            .owlCarousel({
                items: 1,
                dots: true,
                nav: false,
                smartSpeed: 200,
                slideSpeed: 500,
                autoplay: false
            })
            .on("changed.owl.carousel", syncPosition2);

        function syncPosition(el) {
            //if loop is set to false, then you have to uncomment the next line
            //var current = el.item.index;

            //to disable loop, comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }
            //to this
            thumbs
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
            var onscreen = thumbs.find(".owl-item.active").length - 1;
            var start = thumbs
                .find(".owl-item.active")
                .first()
                .index();
            var end = thumbs
                .find(".owl-item.active")
                .last()
                .index();

            if (current > end) {
                thumbs.data("owl.carousel").to(current, 100, true);
            }
            if (current < start) {
                thumbs.data("owl.carousel").to(current - onscreen, 100, true);
            }
        }

        function syncPosition2(el) {
            if (syncedSecondary) {
                var number = el.item.index;
                bigimage.data("owl.carousel").to(number, 100, true);
            }
        }

        thumbs.on("click", ".owl-item", function(e) {
            e.preventDefault();
            var number = $(this).index();
            bigimage.data("owl.carousel").to(number, 300, true);
        });
    });
}

if ($(window).width() < 768) {
    $(document).ready(function() {
        var bigimage1 = $("#big1");
        var thumbs1 = $("#thumbs1");
        //var totalslides = 10;
        var syncedSecondary = true;

        bigimage1
            .owlCarousel({
                items: 1,
                slideSpeed: 2000,
                nav: false,
                autoplay: false,
                slideBy: 1,
                dots: false,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                loop: true
            })
            .on("changed.owl.carousel", syncPosition);

        thumbs1
            .on("initialized.owl.carousel", function() {
                thumbs1
                    .find(".owl-item")
                    .eq(0)
                    .addClass("current");
            })
            .owlCarousel({
                items: 1,
                dots: true,
                nav: false,
                smartSpeed: 200,
                slideSpeed: 500,
                autoplay: false
            })
            .on("changed.owl.carousel", syncPosition2);

        function syncPosition(el) {
            //if loop is set to false, then you have to uncomment the next line
            //var current = el.item.index;

            //to disable loop, comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }
            //to this
            thumbs1
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
            var onscreen = thumbs1.find(".owl-item.active").length - 1;
            var start = thumbs1
                .find(".owl-item.active")
                .first()
                .index();
            var end = thumbs1
                .find(".owl-item.active")
                .last()
                .index();

            if (current > end) {
                thumbs1.data("owl.carousel").to(current, 100, true);
            }
            if (current < start) {
                thumbs1.data("owl.carousel").to(current - onscreen, 100, true);
            }
        }

        function syncPosition2(el) {
            if (syncedSecondary) {
                var number = el.item.index;
                bigimage1.data("owl.carousel").to(number, 100, true);
            }
        }

        thumbs1.on("click", ".owl-item", function(e) {
            e.preventDefault();
            var number = $(this).index();
            bigimage1.data("owl.carousel").to(number, 300, true);
        });
    });

}

if ($(window).width() < 768) {
    $(document).ready(function() {
        var bigimage2 = $("#big2");
        var thumbs2 = $("#thumbs2");
        //var totalslides = 10;
        var syncedSecondary = true;

        bigimage2
            .owlCarousel({
                items: 1,
                slideSpeed: 2000,
                nav: false,
                autoplay: false,
                slideBy: 1,
                dots: false,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                loop: true
            })
            .on("changed.owl.carousel", syncPosition);

        thumbs2
            .on("initialized.owl.carousel", function() {
                thumbs2
                    .find(".owl-item")
                    .eq(0)
                    .addClass("current");
            })
            .owlCarousel({
                items: 1,
                dots: true,
                nav: false,
                smartSpeed: 200,
                slideSpeed: 500,
                autoplay: false
            })
            .on("changed.owl.carousel", syncPosition2);

        function syncPosition(el) {
            //if loop is set to false, then you have to uncomment the next line
            //var current = el.item.index;

            //to disable loop, comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }
            //to this
            thumbs2
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
            var onscreen = thumbs2.find(".owl-item.active").length - 1;
            var start = thumbs2
                .find(".owl-item.active")
                .first()
                .index();
            var end = thumbs2
                .find(".owl-item.active")
                .last()
                .index();

            if (current > end) {
                thumbs2.data("owl.carousel").to(current, 100, true);
            }
            if (current < start) {
                thumbs2.data("owl.carousel").to(current - onscreen, 100, true);
            }
        }

        function syncPosition2(el) {
            if (syncedSecondary) {
                var number = el.item.index;
                bigimage2.data("owl.carousel").to(number, 100, true);
            }
        }

        thumbs2.on("click", ".owl-item", function(e) {
            e.preventDefault();
            var number = $(this).index();
            bigimage2.data("owl.carousel").to(number, 300, true);
        });
    });

}

if ($(window).width() < 768) {
    $(document).ready(function() {
        var imgHeight = $(".screen1").height();
        $(".pointImg").css("height", imgHeight);
    });
}


$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $(".progress-item-1").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
        $(this).removeClass('is-down');
        $('.progress-item-2').addClass('is-down');
        console.log('going down 0')
        $('.f1 .points').removeClass('active');
        $('#progress-item-2').addClass('active');

        $('.f1 .pointImg').hide();
        $('.pointImg-2').show();

        progressDown(2);
    });

});


function progressUp(item) {
    if (item < 1) {
        $('.slider__progress-bar').removeClass('up-consist-bg');

        $(".progress-item-1").addClass('is-down');
        console.log('going down 1')
        $('.f1 .points').removeClass('active');
        $('#progress-item-1').addClass('active');

        $('.f1 .pointImg').hide();
        $('.pointImg-1').show();

        $(".progress-item-1").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
            $(this).removeClass('is-down');
            $(this).addClass('down-consist-bg');

            $('.progress-item-2').addClass('is-down');
            console.log('going down 2')
            $('.f1 .points').removeClass('active');
            $('#progress-item-2').addClass('active');

            $('.f1 .pointImg').hide();
            $('.pointImg-2').show();

            progressDown(2);
        });
    } else {
        $(".progress-item-" + item).one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
            $(this).removeClass('is-up');
            console.log(item)
            $(this).addClass('up-consist-bg');
            var num = item - 1;
            console.log('going up 1')
            $('.progress-item-' + num).addClass('is-up');

            $('.f1 .points').removeClass('active');
            $('#progress-item-' + num).addClass('active');

            $('.f1 .pointImg').hide();
            $('.pointImg-' + num).show();

            progressUp(num);
        });
    }

}

function progressDown(item) {
    //return;
    if (item > 3) {
        console.log('going up 3')
        $('.slider__progress-bar').removeClass('down-consist-bg');
        $(".progress-item-3").addClass('is-up');

        $('.f1 .points').removeClass('active');
        $('#progress-item-3').addClass('active');

        $('.f1 .pointImg').hide();
        $('.pointImg-3').show();

        $(".progress-item-3").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
            $(this).removeClass('is-up');
            $(this).addClass('up-consist-bg');
            //$('.slider__progress-bar').removeClass('up-consist-bg');
            console.log('going up 2')
            $('.progress-item-2').addClass('is-up');

            $('.f1 .points').removeClass('active');
            $('#progress-item-2').addClass('active');

            $('.f1 .pointImg').hide();
            $('.pointImg-2').show();

            progressUp(2);
        });
    } else {

        $(".progress-item-" + item).one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
            $(this).removeClass('is-down');
            $(this).addClass('down-consist-bg');
            var num = item + 1;

            $('.progress-item-' + num).addClass('is-down');
            console.log('going down 3')
            $('.f1 .points').removeClass('active');
            $('#progress-item-' + num).addClass('active');

            $('.f1 .pointImg').hide();
            $('.pointImg-' + num).show();

            progressDown(num);
        });
    }
}

function burger() {
    var burger = document.getElementById('burger');
    var links = document.getElementById('links');
    var bodydiv = document.getElementById('body-div');
    burger.style.borderRadius = '80% 0% 70% 100%';
    tTimeout = setTimeout(timeoutShow, 400);
    burger.style.margin = '-460px -565px 587px 600px';
    burger.style.width = '1191px';
    burger.style.height = '1533px';
    bodydiv.style.display = 'block';
    $('#burger').addClass("fullwidth");

}

function timeoutShow() {
    links.style.display = 'block';
}

function quit() {
    var burger = document.getElementById('burger');
    var links = document.getElementById('links');
    var bodydiv = document.getElementById('body-div');
    $('#burger').removeClass("fullwidth");
    burger.style.padding = '68px 63px 45px 30px';
    links.style.display = 'none';
    burger.style.borderRadius = '42%';

    burger.style.margin = '0px 0px 0px 0px';
    bodydiv.style.display = 'none';
    burger.style.width = '125px';
    burger.style.height = '134px';

}



;
(function(window, document, undefined) {

    'use strict';

    var navTrigger = document.querySelector('.nav-trigger');

    navTrigger.addEventListener('click', function(e) {


        e.preventDefault();
        this.classList.toggle('is-active');

    }, false);

})(window, document);

var x = 0;

function blob() {
    if (x == 0) {
        burger();
        x = 1;
    } else {
        quit();
        x = 0;
    }
}

function closeblob() {
    quit();
    $('.nav-trigger').click();

}

setTimeout(function() {
    $('#loading h1').show();
}, 300);


$(document).ready(function() {
    $('#live-demos').on('click', function(e) {
        e.preventDefault();

        $('body').addClass('is-loading');
        $('#demos').show();
    });

    $('.demos__close').on('click', function() {
        $('body').removeClass('is-loading');
        $('#demos').hide();
    });

    // Video Iframe
    $('.workVideo').click(function(e) {
        e.stopPropagation();
        var src = $('.video iframe').data('src') + "?autoplay=1";
        $('.video iframe').attr('src', src);
        $('.video').addClass('open');
    });

    $('.video').click(function() {
        if ($(this).hasClass("open")) {
            $(this).find("iframe").attr("src", "")
            $(this).removeClass('open');
        }
    });

    setTimeout(function() {
        $('body').removeClass('is-loading');
        $('#loading').remove();
    }, 1000);


    $('#thumbs h1').click(function() {
        $(this).parent('.points').addClass('active');
    });
});