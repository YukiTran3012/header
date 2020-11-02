document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementsByClassName('circle');
    var slide = document.getElementsByClassName('wrapper_1slide');
    var all_img = document.querySelectorAll('.wrapper_1slide img');
    var icon = document.querySelector('.icon');
    var bg_Icon = document.querySelector('.backgruond_icon');
    var logo = document.querySelector('.logo');
    var sticky = bg_Icon.offsetTop;
    var status = true;

    var autoTimeSlide = setInterval(function() {autoSlide()},3000);
    window.onscroll = function(){myScroll()};
    clickButton();
    changeIcon ()

    function changeIcon (){
        icon.addEventListener('click', function() {
            icon.querySelector('.bar1').classList.toggle('bar1_show');
            icon.querySelector('.bar2').classList.toggle('bar2_show');
            icon.querySelector('.bar3').classList.toggle('bar3_show');
            var listmenu = document.querySelector('.list_menu');
            listmenu.classList.toggle('list_menu_show')
        })
    }
    function addClass(slide){
        slide.querySelector('.triangle_bottom1').classList.add('show1');
        slide.querySelector('.triangle_bottom2').classList.add('show2');
        slide.querySelector('.triangle_top').classList.add('show3');
        slide.querySelector('.content_inslide').querySelector('h1').classList.add('show_h1');
        slide.querySelector('.content_inslide').querySelector('h2').classList.add('show_h2');
        slide.querySelector('.content_inslide').querySelector('p').classList.add('show_p');
        slide.querySelector('.content_inslide').querySelector('div').classList.add('show_div');
    }
    function removeAllclass (){
        for (let j = 0; j < button.length; j++) {
            button[j].classList.remove('active');
            slide[j].classList.remove('slide_active');
            slide[j].querySelector('.content_inslide').querySelector('h1').classList.remove('show_h1');
            slide[j].querySelector('.content_inslide').querySelector('h2').classList.remove('show_h2');
            slide[j].querySelector('.content_inslide').querySelector('p').classList.remove('show_p');
            slide[j].querySelector('.content_inslide').querySelector('div').classList.remove('show_div');
        }
        for (let l = 0; l < all_img.length; l++) {
            all_img[l].classList.remove('show1', 'show3', 'show2');
        }
    }
    function myScroll(){
        if (window.pageYOffset > sticky) {
            if(status == true){
                status = false;
                logo.classList.add('fixed');
                bg_Icon.classList.add('show');
            }
        }
        else{
            if(status == false){
                status = true;
                logo.classList.remove('fixed');
                bg_Icon.classList.remove('show')
            }
        } 
    }
    function clickButton (){
        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener('click', function() {
                clearInterval(autoTimeSlide);
                removeAllclass();
                button[i].classList.add('active');
                var currPosition = document.querySelector('.active');
                for (var current = 0; currPosition = currPosition.previousElementSibling; current++){}
                slide[current].classList.add('slide_active');
                let currentSlide = slide[current];
                addClass(currentSlide);
            })
        };
    }
    function autoSlide (){
        var currentSlide = document.querySelector('.slide_active');
        for (var current = 0; currentSlide = currentSlide.previousElementSibling; current++) {}
        if ( current < (slide.length - 1)) {
            removeAllclass();
            var currentNext = slide[current].nextElementSibling;
            currentNext.classList.add('slide_active');
            button[current].nextElementSibling.classList.add('active');
            addClass(currentNext);
        }
        else{
            removeAllclass();
            let x = slide[0];
            x.classList.add('slide_active');
            button[0].classList.add('active');
            addClass(x);
        }
    }
},false)