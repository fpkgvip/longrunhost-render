$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    var typed = new Typed(".typing", {
        strings: ["全球期貨交易服務","香港保險經紀服務","財富管理服務"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    
});
function fnBrowserDetect(){
                 
         let userAgent = navigator.userAgent;
         let browserName;
         
         if(userAgent.match(/chrome|chromium|crios/i)){
             browserName = "chrome";
           }else if(userAgent.match(/firefox|fxios/i)){
             browserName = "firefox";
             alert("You are currently using Mozilla Firefox browser. For best experience, we recommend using Chrome.")
           }  else if(userAgent.match(/safari/i)){
             browserName = "safari";
             alert("You are currently using Safari. For best experience, we recommend using Chrome.")
           }else if(userAgent.match(/opr\//i)){
             browserName = "opera";
             alert("You are currently using Opera browser. For best experience, we recommend using Chrome.")
           } else if(userAgent.match(/edg/i)){
             alert("You are currently using Edge. For best experience, we recommend using Chrome.")
           }else{
             alert("You are currently using [?] browser. For best experience, we recommend using Chrome.")
           }
         
                   
  }
