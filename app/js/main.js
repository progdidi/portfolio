const languageType = {
    title: {
     ru: 'Привет, я Диана Сосновская',
     eng: 'Hello, I am Diana Sosnovskaya'
    }
 }

$(function(){
    //multilingual

    new WOW().init();

    //languages
    

    function setLang() {
        for (let key in languageType) {
            let elem = document.querySelector('.lng-' + key);
            if (elem) {
                
              elem.innerHTML = languageType[key][this.value];
            }
          }
    }
    const langBtn = document.querySelector('.languages-btn');
    langBtn.addEventListener('click', () => {
        setLang()}
        );

        


    
    
});