let mixer = mixitup('.gallery');


// this code is for navBare

let navbarOffset = $(".navbar").offset().top;

$(window).scroll(()=>{
    let wScroll = $(window).scrollTop();
    if(wScroll > navbarOffset + 300){
        $(".navbar").css('background','rgba(55,81,126,0.9)');
        $('.toScroll i').fadeIn(300);

    }else{
        $('.navbar').css('background','transparent');
        $('.toScroll i').fadeOut(300);
    }
})

$('.toScroll i').click(()=>{
    $(window).scrollTop(0)
})

// code for loading screen

$(document).ready(()=>{
    $('#loading').fadeOut(1000, ()=>{
        $('body').css('overflow-y','auto')
    })
})