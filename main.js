window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbr'); 
    var pixelToActivateClass = 1; 

    if (window.scrollY >= pixelToActivateClass) {
        navbar.classList.add('bg'); 
    } else {
        navbar.classList.remove('bg'); 
    }
});


let link_nav = document.querySelectorAll(".insteadLink");
let popup = document.querySelectorAll(".popup");

link_nav.forEach(e => {
    e.addEventListener('click', ()=> {
        popup.forEach(e_popup => {
            if (e_popup === e.querySelector(".popup")) {
                if (!e_popup.classList.contains("show")) {
                    $(e.querySelector(".popup")).fadeIn();
                    e_popup.classList.add("show");
                } else {
                    $(e.querySelector(".popup")).fadeOut();
                    e_popup.classList.remove("show");
                }
            } else {
                $(e_popup).fadeOut();
                e_popup.classList.remove("show");
            }
        });
    })
});


document.addEventListener('click', function(event) {
    if (!event.target.closest('.popup') && !event.target.closest('.insteadLink')) {
        popup.forEach(e_popup => {
            $(e_popup).fadeOut();
            e_popup.classList.remove("show");
        });
    }
});




const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
  
    navigation: {
        nextEl: '.arrow_move2',
        prevEl: '.arrow_move1',
      },

  });