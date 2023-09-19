$(function(){
    //animation
    new WOW().init();
    

    //hover on works items
    const hoverItems = document.querySelectorAll('.works__item');
    hoverItems.forEach((item) => {
      item.addEventListener('mouseover', () => {
        // item.style.transform = "translateX(5%)"; 
      })
      item.addEventListener('mouseout', () => {
        item.style.transform = "";
      })
    })

    //scroll and fixed menu
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      const scrollHeight = window.pageYOffset;
      const headerHeight = header.getBoundingClientRect().height;
      if(scrollHeight > headerHeight) {
        header.classList.add('fixed-header')
      } else {
        header.classList.remove('fixed-header')
      }
    })

    //navbar
    const menuBtn = document.querySelector('.menu__btn'),
          menu = document.querySelector('.menu__list');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('menu__list-active');
    })


    //works items slider
    const workItems = document.querySelectorAll('.works__item');
    workItems.forEach((item) => {
      const prevBtn = item.querySelector('.button-container').querySelector('.prevBtn');
      const nextBtn = item.querySelector('.button-container').querySelector('.nextBtn');
      const slides = item.querySelector('.slider-container').querySelectorAll('.slide');

      let counter = 0;

      prevBtn.addEventListener('click', () => {
        counter--;
        carousel();
      })

      nextBtn.addEventListener('click', () => {
        counter++;
        carousel();
      })


      slides.forEach((slide, i) => {
        slide.style.left = `${i * 100}%`;
      });

      function carousel() {
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
            if(counter === slides.length) {
                counter = 0;
                slide.style.transform = `translateX(0%)`;
            }
            if(counter < 0) {
                counter = slides.length - 1;
                slide.style.transform = `translateX(-${counter * 100}%)`;
            }
        });
        
      }


    })   



    //contacts form    
    const form = document.querySelector('.contacts__form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
      });
      return false;

    })
    
    
});