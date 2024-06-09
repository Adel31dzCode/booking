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
    freeMode: true,
  
    navigation: {
        nextEl: '.arrow_move2',
        prevEl: '.arrow_move1',
      },

  });



  // Score counter and ++


let guests = 1;
let guest_value = document.getElementById("guest_count");

let rooms = 1;
let room_value = document.getElementById("room_count");
let room_btn_minus= document.querySelector(".minus");
let room_btn_plus= document.querySelector(".plus");

window.onload = ()=> {
    room_value.innerHTML = rooms;
    guest_value.innerHTML = guests;
}
// Increment Button
room_btn_plus.addEventListener('click', ()=> {
    if (rooms < 8) {
        rooms++;
        room_value.innerHTML = rooms;
        console.log(rooms);
    }
});
// Desincrement Button
room_btn_minus.addEventListener('click', ()=> {
    if (rooms > 1) {
        rooms--;
        room_value.innerHTML = rooms;
    }
})



let guest_btn_minus= document.querySelector(".minus_guest");
let guest_btn_plus= document.querySelector(".plus_guest");


// Increment Button
guest_btn_plus.addEventListener('click', ()=> {
    if (guests < 16) {
        guests++;
        guest_value.innerHTML = guests;
    }
});
// Desincrement Button
guest_btn_minus.addEventListener('click', ()=> {
    if (guests > 1) {
        guests--;
        guest_value.innerHTML = guests;
    }
});



// Button Search


let search_btn = document.getElementById("search_btn");
let date_inp = document.getElementById("date_value");
let date_now = new Date();

let year = date_now.getFullYear();
let month = (date_now.getMonth() + 1).toString().padStart(2, '0'); 
let day = date_now.getDate().toString().padStart(2, '0');

date_inp.value = `${year}-${month}-${day}`;



search_btn.addEventListener('click', ()=> {

    let value_location = document.getElementById("location_value").value;
    let value_date = document.getElementById("date_value");
    let value_rooms = room_value.innerHTML;
    let value_guests = guest_value.innerHTML;
    
    let search_values = [value_location, value_date, value_rooms, value_guests];

    window.localStorage.setItem("location", search_values[0]);
    window.localStorage.setItem("date", search_values[1].value);
    window.localStorage.setItem("room", search_values[2]);
    window.localStorage.setItem("guest", search_values[3]);


    window.location.href = "result.html";
});


const algerianStates = [
    "Adrar", "Aïn Defla", "Aïn Témouchent", "Algiers", "Annaba",
    "Batna", "Béchar", "Béjaïa", "Biskra", "Blida", "Bordj Bou Arréridj",
    "Bouira", "Boumerdès", "Chlef", "Constantine", "Djelfa", "El Bayadh",
    "El Oued", "El Tarf", "Ghardaïa", "Guelma", "Illizi", "Jijel", "Khenchela",
    "Laghouat", "M'Sila", "Mascara", "Médéa", "Mila", "Mostaganem", "Naâma",
    "Oran", "Ouargla", "Oum El Bouaghi", "Relizane", "Saïda", "Sétif", "Sidi Bel Abbès",
    "Skikda", "Souk Ahras", "Tamanghasset", "Tébessa", "Tiaret", "Tindouf", "Tipaza",
    "Tissemsilt", "Tizi Ouzou", "Tlemcen"
];

$(document).ready(function() {
    $("#location_value").autocomplete({
        source: algerianStates,
        autoFocus: true,
        delay: 100,
        minLength: 1,
    });
});


const algerianStatesArabic = [
    "ادرار", "عين الدفلى", "عين تيموشنت", "الجزائر", "عنابة",
    "باتنة", "بشار", "بجاية", "بسكرة", "البليدة", "برج بوعريريج",
    "البويرة", "بومرداس", "الشلف", "قسنطينة", "الجلفة", "البيض",
    "الوادي", "الطارف", "غرداية", "قالمة", "إليزي", "جيجل", "خنشلة",
    "الأغواط", "المسيلة", "معسكر", "المدية", "ميلة", "مستغانم", "النعامة",
    "وهران", "ورقلة", "أم البواقي", "غليزان", "سعيدة", "سطيف", "سيدي بلعباس",
    "سكيكدة", "سوق أهراس", "تمنراست", "تبسة", "تيارت", "تندوف", "تيبازة",
    "تيسمسيلت", "تيزي وزو", "تلمسان"
];


$(document).ready(function() {
    $(".po").autocomplete({
        source: algerianStatesArabic,
        autoFocus: true,
        delay: 100,
        minLength: 1,
    });
});

