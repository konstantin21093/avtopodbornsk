new WOW().init();
/* Slick slider */
$(document).ready(function(){
    $('.mainslider').slick({
        accessibility: false,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 10000,
        fade: true,
    });
    $('.risk-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1221,
              settings: {
                slidesToShow: 2,
                prevArrow: '<button class="prev"></button>',
                nextArrow: '<button class="next"></button>',
                slidesToScroll: 2,
                infinite: true,
              }
            },
            {
              breakpoint: 586,
              settings: {
                slidesToShow: 1,
                prevArrow: '<button class="prev"></button>',
                nextArrow: '<button class="next"></button>',
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
});
/* --------------------------------------------------------------------------------------- */
/* Анимация заголовка */
$("#js-rotating").Morphext({
    animation: "flipInX",
    speed: 6000,    
});
/* --------------------------------------------------------------------------------------- */
/* Плавный скролинг */
$(".jmm a, .jmob a, .back-to-top, .main-btn-item2").mPageScroll2id({
    offset : 70,
    forceSingleHighlight: true
});
/* --------------------------------------------------------------------------------------- */ 
/* Мобильное меню */    
$('#burg').on('click', function(){
    $(this).toggleClass('active');
    $('.jmob').slideToggle();
});
$(window).resize(function() {
    /* setTimeout(function(){ */
        if ($(document).width() > 1220){
            $('.jmob').css("display", "none");                           
        }
        else {
            if ($('.top-menu-btn-center').css('opacity') == "0")
                {
                    $('.jmob').css("display", "block");
                }
        }
/*    }, 2000);  */
});
$('.jmob').on('click', function(){
    $('.top-menu-btn').toggleClass('active');
    $('.jmob').slideToggle();    
});
/* --------------------------------------------------------------------------------------- */
/* Анимация наши услуги */
/* 1-ый элемент*/ 
$('.jsh31').on('click', function(){
    if ($(document).width() < 763)
        {
            $('.jsc1').slideToggle();
        }
});    
$(window).resize(function() {
    if ($(document).width() < 763){
        $('.jsc1').css("display", "none");           
    }
    else {
        if ($(document).width() > 762)
            {
                $('.jsc1').css("display", "block");
            }
    }    
});
/* -------------------------------------------------------------------------------------- */
/* 2-ый элемент */
$('.jsh32').on('click', function(){
    if ($(document).width() < 763)
        {
            $('.jsc2').slideToggle();
        }
});    
$(window).resize(function() {
    if ($(document).width() < 763){
        $('.jsc2').css("display", "none");           
    }
    else {
        if ($(document).width() > 762)
            {
                $('.jsc2').css("display", "block");
            }
    }    
});
/* -------------------------------------------------------------------------------------- *//* 3-ый элемент */
$('.jsh33').on('click', function(){
    if ($(document).width() < 763)
        {
            $('.jsc3').slideToggle();
        }
});    
$(window).resize(function() {
    if ($(document).width() < 763){
        $('.jsc3').css("display", "none");           
    }
    else {
        if ($(document).width() > 762)
            {
                $('.jsc3').css("display", "block");
            }
    }    
});
/* -------------------------------------------------------------------------------------- *//* 4-ый элемент */
$('.jsh34').on('click', function(){
    if ($(document).width() < 763)
        {
            $('.jsc4').slideToggle();
        }
});    
$(window).resize(function() {
    if ($(document).width() < 763){
        $('.jsc4').css("display", "none");           
    }
    else {
        if ($(document).width() > 762)
            {
                $('.jsc4').css("display", "block");
            }
    }    
});
/* -------------------------------------------------------------------------------------- *//* 5-ый элемент */
$('.jsh35').on('click', function(){
    if ($(document).width() < 763)
        {
            $('.jsc5').slideToggle();
        }
});    
$(window).resize(function() {
    if ($(document).width() < 763){
        $('.jsc5').css("display", "none");           
    }
    else {
        if ($(document).width() > 762)
            {
                $('.jsc5').css("display", "block");
            }
    }    
});
/* -------------------------------------------------------------------------------------- *//* 6-ый элемент */
$('.jsh36').on('click', function(){
    if ($(document).width() < 763)
        {
            $('.jsc6').slideToggle();
        }
});    
$(window).resize(function() {
    if ($(document).width() < 763){
        $('.jsc6').css("display", "none");           
    }
    else {
        if ($(document).width() > 762)
            {
                $('.jsc6').css("display", "block");
            }
    }    
});
/* -------------------------------------------------------------------------------------- */
/* Работа галереи */
var $item = $('.works-gallery').find('> .wgblock'),
    $links = $item.find('> a'),
    $viewbox = $('.works-viewbox'),
    $exit = $('.exit'),
    $prev = $('.prev'),
    $next = $('.next'),
    itemIndex,
    targetImg;

/*var imgs = [];
var imgSources = [
    '/img/works/BMW.jpg',
    '/img/works/FORD.jpg',
    '/img/works/AUDI.jpg',
    '/img/works/HONDA.jpg',
    '/img/works/HONDA2.jpg',
    '/img/works/SUBARU.jpg',
    '/img/works/INFINITI.jpg',
    '/img/works/SUBARU2.jpg',
];

for (var i=0; i < imgSources.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = imgSources[i];
}
*/
$links.click(function(event) {
    event.preventDefault();
    itemIndex = $(this).parent().index();
    targetImg = $(this).attr('href');
    $viewbox.find('img').attr('src', targetImg);
    $viewbox.fadeIn();
});

$exit.click(function() {
    $viewbox.fadeOut();
});

$next.click(function() {
    if ((itemIndex + 1) < $item.length) 
        {
            targetImg = $item.eq(itemIndex + 1).find('> a').attr('href');
            itemIndex ++;
    }
    else {
        targetImg = $item.eq(0).find('> a').attr('href');
        itemIndex = 0;
    }
    $viewbox.find('img').attr('src', targetImg);


});

$prev.click(function() {
    if ((itemIndex) == 0) 
        {
            targetImg = $item.eq(7).find('> a').attr('href');
            itemIndex = 7;
    }
    else {
        targetImg = $item.eq(itemIndex - 1).find('> a').attr('href');
        itemIndex --;
    }
    $viewbox.find('img').attr('src', targetImg);
});
/* -------------------------------------------------------------------------------------- */
/* Анимация счётчиков */
//$(document).ready(function() {

    var show = true;
    $(window).on("scroll", function() {
        if(!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $("#advantages").offset().top;

        ///console.log(w_top + " " + e_top);

        if(w_top + 400 >= e_top)
            {
                $(".pn1").spincrement({
                    thousandSeparator: "",
                    duration: 9500
                });
                $(".pn2").spincrement({
                    thousandSeparator: "",
                    duration: 3500
                });
                $(".pn3").spincrement({
                    thousandSeparator: "",
                    duration: 3900
                });
                $(".pn4").spincrement({
                    thousandSeparator: "",
                    duration: 4500
                });
                show = false;
            }
    });
//});
/* -------------------------------------------------------------------------------------- */
/* Работа модального окна */
$('.main-btn-item1').on('click', function(event) {
    event.preventDefault();
    $('.popup').fadeIn();
});
$('.btn-order').on('click', function(event) {
    event.preventDefault();
    $('.popup').fadeIn();
});
$('.popup-close').on('click', function(event) {
    event.preventDefault();
    $('.popup').fadeOut();    
});
/* -------------------------------------------------------------------------------------- */
/* Обработчик формы обратной связи */
$(function(){
    $('#form').submit(function() {
        /* var data = $('#form_p').serialize(); */
        var u_n = $('#name').val();
        var u_p = $('#phone').val();
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: {
                u_n,
                u_p,
            },
            /* data: data, */
            success: function(res){
                $('#form').find('input').val('');
                alert('Спасибо за заявку! Скоро мы с вами свяжемся.');
            },
            error: function(){
                alert('Ошибка!');
            }
        });
        return false;
    });
});


$(function(){
    $('#form_p').submit(function() {
        /* var data = $('#form_p').serialize(); */
        var u_n_p = $('#name_p').val();
        var u_p_p = $('#phone_p').val();
        $.ajax({
            url: 'mail_p.php',
            type: 'POST',
            data: {
                u_n_p,
                u_p_p,
            },
            /* data: data, */
            success: function(res){
                $('#form_p').find('input').val('');
                alert('Спасибо за заявку! Скоро мы с вами свяжемся.');
                $('.popup').fadeOut();
            },
            error: function(){
                alert('Ошибка!');
            }
        });
        return false;
    });
});









/* 
$(document).ready(function(){


$('.form-btn').click(function(){
    // собираем данные с формы
    var user_name    = $('#name').val();
    var user_phone   = $('#phone').val();
    // отправляем данные
    $.ajax({
        url: "mail.php", // куда отправляем
        type: "post", // метод передачи
        dataType: "json", // тип передачи данных
        data: { // что отправляем
            "user_name":    user_name,
            "user_phone":   user_phone,
        },
        // после получения ответа сервера
        success: function(data){
            //alert("Спасибо!");
            $('.messages').html(data.result); // выводим ответ сервера
        }
    });
});
});

 */




/* $("#form").submit(function() {
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        $("#form").trigger("reset");
    });
    return false;
});
$("#form_p").submit(function() {
    $.ajax({
        type: "POST",
        url: "mail_p.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        $("#form_p").trigger("reset");
    });
    return false;
});
 */










/* 
$('.jsh31').on('click', function(){
    if ($(document).width() < 763)
        {
            $('.jsc1').slideToggle();
        }    
});
$('.jsh32').on('click', function(){
    if ($(document).width() < 763)
        {
            $('.jsc2').slideToggle();
        }    
});
$('.jsh33').on('click', function(){
    if ($(document).width() < 763)
        {
            $('.jsc3').slideToggle();
        }    
});
$('.jsh34').on('click', function(){
    if ($(document).width() < 763)
        {
            $('.jsc4').slideToggle();
        }    
});
$('.jsh35').on('click', function(){
    if ($(document).width() < 763)
        {
            $('.jsc5').slideToggle();
        }    
});
$('.jsh36').on('click', function(){
    if ($(document).width() < 763)
        {
            $('.jsc6').slideToggle();
        }    
});*/
 
/* --------------------------------------------------------------------------------------- */

    /* if ($('.top-menu-btn-center').css('opacity') == "0") {
                $('.jmob').css("display", "block");
            } */