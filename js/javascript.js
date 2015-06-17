$(window).load(function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
});


// Hides the elements when idle
var idleTime = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 1000); // 4 seconds

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
        $('.footer').show(1000);
        $('.top-bar').slideDown(500);
        $('.footer ul').fadeIn();
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });
});

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 2) { // 8 seconds
        $('.footer ul').fadeOut('fast');
        $('.footer').hide(1000);
        $('.top-bar').slideUp(500);
    }
}

/* fix vertical when not overflow
call fullscreenFix() if .fullscreen content changes */
function fullscreenFix(){
    var h = $('body').height();
    // set .fullscreen height
    $(".content-b").each(function(i){
        if($(this).innerHeight() <= h){
            $(this).closest(".fullscreen").addClass("not-overflow");
        }
    });
}
$(window).resize(fullscreenFix);
fullscreenFix();

/* resize background images */
function backgroundResize(){
    var windowH = $(window).height();
    $(".background").each(function(i){
        var path = $(this);
        // variables
        var contW = path.width();
        var contH = path.height();
        var imgW = path.attr("data-img-width");
        var imgH = path.attr("data-img-height");
        var ratio = imgW / imgH;
        // overflowing difference
        var diff = parseFloat(path.attr("data-diff"));
        diff = diff ? diff : 0;
        // remaining height to have fullscreen image only on parallax
        var remainingH = 0;
        if(path.hasClass("parallax")){
            var maxH = contH > windowH ? contH : windowH;
            remainingH = windowH - contH;
        }
        // set img values depending on cont
        imgH = contH + remainingH + diff;
        imgW = imgH * ratio;
        // fix when too large
        if(contW > imgW){
            imgW = contW;
            imgH = imgW / ratio;
        }
        //
        path.data("resized-imgW", imgW);
        path.data("resized-imgH", imgH);
        path.css("background-size", imgW + "px " + imgH + "px");
    });
}
$(window).resize(backgroundResize);
$(window).focus(backgroundResize);
backgroundResize();

//slider begins here




/* This function was working for changing background image at random seconds

var images = ['img/1.jpg','img/2.jpg','img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', ];
 var i = 0;
 var allDivs = [];

 function changeBackground() {
     allDivs = $(".fullscreen.background").each(function(){
        setBG($(this),1000);
  });
 }
 console.log(allDivs);
 function setBG(div, time){
    var timeVar;
    clearTimeout(timeVar);

    if( div == undefined){
       return;
    }

    div.css('background-image', function() {
       if (i >= images.length) {
           i=0;
       }
      return 'url(' + images[i++] + ')';
   });

   timeVar = setTimeout(setTimer, time);
  }

 function getRandomInt (min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 function setTimer(){
   var imageIndex = getRandomInt(0,allDivs.length);
   setBG($(allDivs[imageIndex]),3000);
 }

 $(function(){
    changeBackground();
 });
 */



var images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg' ];
var imagesthumb = ['img/thumbs/1.jpg', 'img/thumbs/2.jpg', 'img/thumbs/3.jpg', 'img/thumbs/4.jpg', 'img/thumbs/5.jpg', 'img/thumbs/6.jpg', 'img/thumbs/7.jpg', 'img/thumbs/8.jpg' ];
var imgSrc = '';
var myImages = [], myMackgroundImage;
var i = 0;
var allDivs = [];
var active = "";
// Load thumbnails on page load
$(document).ready(function () {
    for (var k = 0; k < images.length; k++) {
        if (k == 0)
            active = "active";
        else
            active = "";
        $('.footer ul').append("<li class='" + active + "' id='" + k + "'><img src='" + imagesthumb[k] + "' + /></li>");
    }
});

// Image preloading
function preloader() {
    if (document.images) {
        for (var j = 0; j < images.length; j++) {
            var imgpreload = new Image();
            imgpreload.src = images[j];
        }
    }
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addLoadEvent(preloader);



// This new function change background when I click the next button
function slideBackground(direction) {
    var dir = direction;
    allDivs = $(".fullscreen.background").each(function () {
        setBG($(this), dir);
    });
}

function setBG(div, direction, jumpID) {
    if (div == undefined) {
        return;
    }

    if (direction == "right") {
        if (i >= images.length-1)
            i = -1;
        imgSrc = images[++i];
    }
    else if (direction == "left") {
        if (i <= 0)
            i = images.length;
        imgSrc = images[--i];
    }
    else if (direction == "jump") {
        imgSrc = images[jumpID];
        i = jumpID;
    }

        var url = 'url(' + imgSrc + ')';
        var myBackgroundImage = new Image();
        $('.nextImage').css("display", "normal");
        myBackgroundImage.src = imgSrc;
        myBackgroundImage.onload = function () {
            div.fadeOut(500, function () {
                $('.nextImage').css("display", "none");
                $('.footer ul li.active').removeClass("active");
                $('#' + i + '').addClass("active");
                div.css('background-image', 'url(' + myBackgroundImage.src + ')');
                div.fadeIn(500);
            });
        };

}

$('.slide-left').click(function () {
    slideBackground("left");
});

$('.slide-right').click(function () {
    slideBackground("right");
});


// Mouseover the menu bar
 $('.top-bar').hover(function () {
     $(this).animate({ 'height': "-=10", 'padding-left': "30" }, 300, function () { });
 }, function () {
     $(this).animate({ 'height': '+=10', 'padding-left': '0' }, 300, function () { });
 });


 $('.top-bar').click(function () {
     $('.contact').css({ 'display': 'block' });
     $('.contact').animate({ 'height': '100%' }, 500, function () {
         $('.contact .links').show("slow");
         $('.contact .contact-footer').slideDown("slow");
         $('.contact ul li:last-of-type').animate({ 'padding': '10%' }, 1000);
         $('.contact .cross').show();
     });
 });

 $('.contact .cross').click(function (e) {
     if (e.target == e.currentTarget) {
         $('.contact ul li:last-of-type').animate({ 'padding': '0%' }, 1000);
         $('.contact').animate({ 'height': '0%' }, 1000);
         $('.contact .links').hide("slow");
         $('.contact .contact-footer').hide("slow");
         $('.contact').hide(300);
         $('.contact .cross').hide();
     }

 });

 $('.contact ul li a').hover(function () {
     $(this).animate({ 'padding-left': '10px', 'color' : 'black' }, 200);
 }, function () {
     $(this).animate({ 'padding-left': '0px' }, 200);
 });

 $(document).on('click', '.footer ul li', function () {
     $('.footer ul li.active').removeClass("active");
     $(this).addClass("active");
     if(this.id != i)
        setBG($('.fullscreen.background'), "jump", this.id);
 });
