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

    // close mobile menu on link click
    $('.menu-link').click(function(){
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });
});

//typing animation

var typed = new Typed(".typing", {
    strings: ["Senior Software Engineer!", "Platform Engineer!", "AWS Solution Architect!", "DevOps Engineer!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed2 = new Typed(".typing-2", {
    strings: ["AWS Solution Architect!", "DevOps Engineer!", "Go & Java Developer!", "Kubernetes Admin!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

window.onload = function() {
    var logoContainer = document.querySelector('.logo-container');
    logoContainer.classList.add('show');
};

function toggleExperience() {
    var timeline = document.querySelector('.timeline');
    var btn = document.querySelector('.toggle-exp-btn');
    timeline.classList.toggle('expanded');
    btn.classList.toggle('expanded');
    if (timeline.classList.contains('expanded')) {
        btn.innerHTML = '<i class="fas fa-chevron-up"></i> Show Less';
    } else {
        btn.innerHTML = '<i class="fas fa-chevron-down"></i> Show More';
    }
}