const langSelector = document.querySelector('.languages-select');
const langInput = document.querySelector('.languages-select__input');
const langListItem = document.querySelectorAll('.languages-select__list-item');


//открываем список языков
openLanguageList = () => {
    langSelector.classList.toggle('open');
}
langInput.addEventListener('click', openLanguageList);


//функция перевода
function changeLang(chosenLang) {
    let lang = chosenLang.toLowerCase();
    console.log(lang);
    for (let key in languageText) {
        let elems = document.querySelectorAll('.lng-' + key);
        elems.forEach((elem) => {
            if (elem) {
            elem.innerHTML = languageText[key][lang];
            }
        })
        
    }
}


//обработчик клика по языку из списка
langListItem.forEach((lang) => {
    lang.addEventListener('click', (e) => {
        let langValue = e.currentTarget.innerHTML;
        langInput.querySelector('span').innerHTML = langValue;
        changeLang(langValue);
        langSelector.classList.remove('open');
    })
})






