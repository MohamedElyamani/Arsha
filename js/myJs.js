let mixer = mixitup('.gallery');

new VenoBox({
    selector: '.venobox'
  });
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


// loop for clients brand
brandItems();
function brandItems(){
    let items = ``
    for (let i = 0; i < 6; i++) {
         items += `
         <div class="col-lg-2 col-md-4 col-sm-6">
         <div class="brand-item">
             <img src="img/clients/client-${i+1}.png" alt="brand 1" class="w-50">
         </div>
        </div>
        `
    document.getElementById('brandsRow').innerHTML = items
    }
}

// loop for team

let teams = [
    {img:'img/team/team-1.jpg',
    name:'Walter White',
    job:'Chief Executive Officer',
    desc:'Explicabo voluptatem mollitia et repellat qui dolorum quasi'},

    {img:'img/team/team-2.jpg',
    name:'Sarah Jhonson',
    job:'Product Manager',
    desc:'Aut maiores voluptates amet et quis praesentium qui senda para'},
    
    {img:'img/team/team-3.jpg',
    name:'William Anderson',
    job:'CTO',
    desc:'Quisquam facilis cum velit laborum corrupti fuga rerum quia'},

    {img:'img/team/team-4.jpg',
    name:'Amanda Jepson',
    job:'Accountant',
    desc:'Dolorum tempora officiis odit laborum officiis et et accusamus'},
]
team();
function team(){
let team = ``
for (let i = 0; i < teams.length; i++) {
    team +=`
        <div class="col-md-6">
                    <div class="team-member bg-white p-3 mb-3 d-flex justify-content-around rounded-2">
                        <div class="team-member-img w-50">
                            <img src="${teams[i].img}" alt="team-member" class="rounded-circle w-75">
                        </div>
                        <div class="team-member-info">
                            <h4>${teams[i].name}</h4>
                            <h6>${teams[i].job}</h6>
                            <div class="team-member-line"></div>
                            <p>${teams[i].desc}</p>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-github"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
                `
            }
            document.getElementById('teamRow').innerHTML = team
}
