'use strict';
var menuBtn = document.getElementById('menu-btn');
var slideMenu = document.getElementById('slide-menu');
var menuFordon = document.getElementById('menu-fordon');
var menuDetaljer = document.getElementById('menu-detaljer');
var menuMember = document.getElementById('menu-member');
var menuRecommend = document.getElementById('menu-recommendation');
var sho = document.getElementById('show');

var roverName = 'curiosity';
var solNr = 2999;

fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${solNr}&api_key=JRLFjiGREcuww7SrTcrgT07X9m9AFoxJ1s6tomgw`)
  .then((res) => res.json())
  .then((data) => createPages(data));

function createPages(api) {
  check(api);

  console.log("here",api.photos[1].img_src);
  // api.photos.forEach(photo => {
  //   console.log(photo.img_src);
  // });
  // console.log(api);

  menuFordon.addEventListener('click', () => {
    
  });

  function showRovers() {}
}

function check(api) {
  let print = '';
  api.photos.forEach((el) => {
    console.log(el);
    print += `<img src="${el.img_src}" alt="" class="pic">`;
    show.innerHTML = print;
  });
}

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  if (menuBtn.classList.contains('open')) {
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>'
    slideMenu.style.visibility = 'hidden';
  } else {
    menuBtn.innerHTML = '<i class="fas fa-times"></i>'
    slideMenu.style.visibility = 'visible';
  }
});

