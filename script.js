$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide-up

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //toogle menu/navbar

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

//typing animation

var typed = new Typed(".typing", {
    strings: ["AWS Solution Architect!","DevOps Engineer!","Java Developer!", "Freelancer!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["AWS Solution Architect!","DevOps Engineer!","Java Developer!", "Freelancer!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

window.onload = function() {
    var logoContainer = document.querySelector('.logo-container');
    logoContainer.classList.add('show');
  };