


//=================JQUERY (SLIDERS)===================

$(document).ready(function () {
  $('#fullpage').fullpage( {
      navigation:true,
    }
  );
    

  $('.announce-slider').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop:true,
    nav:false,
    margin: 20,
    dots: true,
    mouseDrag : false,
    touchDrag : true,
    autoplay:true,
    autoplayTimeout:8000,
    responsive:{
        0:{
            items:1
        }
    }
  });

  $('.courses-slider').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop:true,
    nav:false,
    margin: 20,
    dots: true,
    mouseDrag : false,
    touchDrag : true,
    autoplay:true,
    autoplayTimeout:8000,
    responsive:{
        0:{
            items:1
        }
    }
  });

  $('.media__slider_photo').owlCarousel({
    animateOut: 'zoomOut',
    animateIn: 'zoomIn',
    loop:true,
    nav:false,
    margin: 20,
    dots: true,
    mouseDrag : false,
    touchDrag : true,
    // autoplay:true,
    // autoplayTimeout:8000,
    responsive:{
        0:{
            items:1
        }
    }
  });

  $('.media__slider_video').owlCarousel({
    animateOut: 'zoomOut',
    animateIn: 'zoomIn',
    loop:true,
    nav:false,
    margin: 20,
    dots: true,
    mouseDrag : false,
    touchDrag : true,
    autoplay:true,
    autoplayTimeout:8000,
    responsive:{
        0:{
            items:1
        }
    }
  });

  $('.photogallery__slider').owlCarousel({
    loop:true,
    nav:true,
    margin: 120,
    stagePadding: 500,
    dots: true,
    touchDrag : true,
    // autoplay:true,
    // autoplayTimeout:8000,
    responsive:{
        0:{
            items: 1
        }
    }
  });

  if($("#map__yandex").length>0) {		
    ymaps.ready(function() {
        var myMap = new ymaps.Map("map__yandex",{
            center: [53.23699207119478,63.57197599999994],
            zoom: 14.5,
            
            "multiTouch": true,
            controls: []
        });
        var myPlacemark = new ymaps.Placemark([53.23699207119478,63.57197599999994],{
            hintContent: 'Случайный адрес'
        },{
            iconLayout: ymaps.templateLayoutFactory.createClass('<div class="point"><img src="img/icon.svg"></div>'),
            iconPane: 'overlaps',
            iconSize: [32, 32],
            iconOffset: [-16, -32]
        });
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom')
    });
  }

});

//=================CURSOR FOLLOW===================

$(window).mousemove(function(e) { 
  $('.cursor').css({
    left: e.pageX,
     top: e.pageY
  })
})

$('.link_cursor').on('mouseenter', function() {
  $('.cursor').addClass('active')
}).on('mouseleave', function() {
  $('.cursor').removeClass('active')
})


document.body.onload = function()
 {
  let menuBurger = document.querySelector('.burger'),
      navMenu = document.querySelector('.fp-right');

  menuBurger.addEventListener('click', function() {
    menuBurger.classList.toggle('activeburger');
    navMenu.classList.toggle('openmenu');
  });
}







//=================FULLPAGE===================

//html setup
var pupilsHTMLCollection1 = document.getElementsByClassName('media__ring_1');
var pupilsArray1 = Array.from(pupilsHTMLCollection1);
var pupilsHTMLCollection2 = document.getElementsByClassName('media__ring_2');
var pupilsArray2 = Array.from(pupilsHTMLCollection2);
var pupilsHTMLCollection3 = document.getElementsByClassName('media__ring_3');
var pupilsArray3 = Array.from(pupilsHTMLCollection3);
var pupilsHTMLCollection4 = document.getElementsByClassName('media__ring_4');
var pupilsArray4 = Array.from(pupilsHTMLCollection4);
var pupilsHTMLCollection5 = document.getElementsByClassName('media__ring_5');
var pupilsArray5 = Array.from(pupilsHTMLCollection5);
var pupilsHTMLCollection6 = document.getElementsByClassName('media__ring_6');
var pupilsArray6 = Array.from(pupilsHTMLCollection6);


// input setup
var input={
  mouseX:{
    start:0,
    end: window.innerWidth,
    current:0,
  },
  mouseY:{
    start:0,
    end: window.innerHeight,
    current:0,
  }
};
input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

// output setup

var output1 ={
  x: {
    start: -70,
    end: 70,
    current:0,
  },
  y: {
    start: -70,
    end: 70,
    current:0,
  },
};

var output2 ={
  x: {
    start: -70,
    end: 70,
    current:0,
  },
  y: {
    start: -70,
    end: 70,
    current:0,
  },
};

var output3 ={
  x: {
    start: -100,
    end: 100,
    current:0,
  },
  y: {
    start: -100,
    end: 100,
    current:0,
  },
};

var output4 ={
  x: {
    start: -150,
    end: 150,
    current:0,
  },
  y: {
    start: -150,
    end: 150,
    current:0,
  },
};

var output5 ={
  x: {
    start: -220,
    end: 220,
    current:0,
  },
  y: {
    start: -220,
    end: 220,
    current:0,
  },
};

var output6 ={
  x: {
    start: -300,
    end: 300,
    current:0,
  },
  y: {
    start: -300,
    end: 300,
    current:0,
  },
};

output1.x.range = output1.x.end - output1.x.start;
output1.y.range = output1.y.end - output1.y.start;

output2.x.range = output2.x.end - output2.x.start;
output2.y.range = output2.y.end - output2.y.start;

output3.x.range = output3.x.end - output3.x.start;
output3.y.range = output3.y.end - output3.y.start;

output4.x.range = output4.x.end - output4.x.start;
output4.y.range = output4.y.end - output4.y.start;

output5.x.range = output5.x.end - output5.x.start;
output5.y.range = output5.y.end - output5.y.start;

output6.x.range = output6.x.end - output6.x.start;
output6.y.range = output6.y.end - output6.y.start;




var handleMouseMove = function (event) {
  // mouse x input
  input.mouseX.current = event.clientX;
  input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) /  input.mouseX.range;
  
  // mouse y input
  input.mouseY.current = event.clientY;
  input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) /  input.mouseY.range;
  
  // output x

  output1.x.current = output1.x.start + (input.mouseX.fraction * output1.x.range);
  output1.y.current = output1.y.start + (input.mouseY.fraction * output1.y.range);

  output2.x.current = output2.x.start + (input.mouseX.fraction * output2.x.range);
  output2.y.current = output2.y.start + (input.mouseY.fraction * output2.y.range);

  output3.x.current = output3.x.start + (input.mouseX.fraction * output3.x.range);
  output3.y.current = output3.y.start + (input.mouseY.fraction * output3.y.range);

  output4.x.current = output4.x.start + (input.mouseX.fraction * output4.x.range);
  output4.y.current = output4.y.start + (input.mouseY.fraction * output4.y.range);

  output5.x.current = output5.x.start + (input.mouseX.fraction * output5.x.range);
  output5.y.current = output5.y.start + (input.mouseY.fraction * output5.y.range);

  output6.x.current = output6.x.start + (input.mouseX.fraction * output6.x.range);
  output6.y.current = output6.y.start + (input.mouseY.fraction * output6.y.range);
  
  // apply output to html

  pupilsArray1.forEach(function (media__ring_1, k){
    media__ring_1.style.transform = 'translate('+output1.x.current+'px, '+output1.y.current+'px)';
  });

  pupilsArray2.forEach(function (media__ring_2, k){
    media__ring_2.style.transform = 'translate('+output2.x.current+'px, '+output2.y.current+'px)';
  });
  
  pupilsArray3.forEach(function (media__ring_3, k){
    media__ring_3.style.transform = 'translate('+output3.x.current+'px, '+output3.y.current+'px)';
  });

  pupilsArray4.forEach(function (media__ring_4, k){
    media__ring_4.style.transform = 'translate('+output4.x.current+'px, '+output4.y.current+'px)';
  });

  pupilsArray5.forEach(function (media__ring_5, k){
    media__ring_5.style.transform = 'translate('+output5.x.current+'px, '+output5.y.current+'px)';
  });

  pupilsArray6.forEach(function (media__ring_6, k){
    media__ring_6.style.transform = 'translate('+output6.x.current+'px, '+output6.y.current+'px)';
  });
  
  
  
}

var handleResize = function () {
  input.mouseX.end = window.innerWidth;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;
  
  input.mouseY.end = window.innerHeight;
  input.mouseY.range = input.mouseY.end - input.mouseY.start;
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);


let pageBurger = document.querySelector('.page-burger'),
    navMenu = document.querySelector('.page-header_course'),
    navTitle = document.querySelector('.page-header__preview_template'),
    
    ringButton = document.querySelector('.page-header__ring_4'),
    videoContent = document.querySelector('.wrapper'),
    videoBlock = document.querySelector('.page-header_blockvideo'),

    circleButton = document.querySelector('.media__ring_1'),
    backgroundBlock = document.querySelector('.media'),
    fullpageBlock = document.querySelector('.fullpage'),
    menuBurger = document.querySelector('.burger');


if (!pageBurger) {
  pageBurger = null;
} else {
  pageBurger.addEventListener('click', function() {
    pageBurger.classList.toggle('page-burger_active');
    navMenu.classList.toggle('page-header_course_active');
    navTitle.classList.toggle('page-header__preview_template_active');
  });
};

ringButton.addEventListener('click', function() {
  videoContent.classList.toggle('videoactive');
});
videoBlock.addEventListener('click', function() {
  videoContent.classList.remove('videoactive');
});

circleButton.addEventListener('click', function() {
  backgroundBlock.classList.toggle('backgroundHidden');
  fullpageBlock.classList.toggle('fullpage_active');
  menuBurger.classList.toggle('burger_active');
});

circleButton.addEventListener('click', function() {
  backgroundBlock.classList.toggle('backgroundHidden');
  fullpageBlock.classList.toggle('fullpage_active');
  menuBurger.classList.toggle('burger_active');
});


