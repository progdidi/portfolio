const languageType = {
    title: {
     ru: 'Привет, я Диана Сосновская',
     eng: 'Hello, I am Diana Sosnovskaya'
    }
 }


$(function(){
    //animation
    new WOW().init();

    //languages
    // function setLang() {
    //     for (let key in languageType) {
    //         console.log(key)
    //         let elem = document.querySelector('.lng-' + key);
    //         console.log(elem)
    //         if (elem) {
            
    //           elem.innerHTML = languageType[key];
    //         }
    //       }
    // }
    // const langBtn = document.querySelector('.languages-btn');
    // langBtn.addEventListener('click', () => {
    //     setLang()}
    //     );


    //hover
    const hoverItems = document.querySelectorAll('.works__item');
    hoverItems.forEach((item) => {
      item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "red"; 
      })
      item.addEventListener('mouseout', () => {
        item.style.transform = "";
      })
    })

    //scroll
    const header = document.querySelector('.header');
    const scrollHeight = window.pageYOffset;
    const headerHeight = header.getBoundingClientRect().height;

    window.addEventListener('scroll', () => {
      if(scrollHeight > headerHeight) {
        
        header.classList.add('fixed-header')
      } else {
        console.log(scrollHeight)
        header.classList.remove('fixed-header')
      }
    })
        
    
    
});