import {languageType} from './language.js';

$(function(){
    //multilingual
    const langs = document.querySelector('.languages');
    const change = document.querySelectorAll('.languages__item');

    let title = document.querySelector('.promo__info-title');

    change.forEach(elem => {
      elem.addEventListener('click', () => {
          langs.querySelector(".active").classList.remove("active")
          elem.classList.add("active")
          let attr = elem.getAttribute("language")
          title.textContent = languageType[attr].title
      })
    })
    
    
});