
/* фильтр на мобильных устр */
const sidebar = document.querySelector('.sidebar'); 
const sidebarBtn = document.querySelector('.menu-icon-wrapper'); 
const menuIcon = document.querySelector('.menu-icon')

sidebarBtn.onclick = function(){
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
}
/* фильтр на мобильных устр */


/*скрытие виджетов*/
const widgetTitles = document.querySelectorAll('.widget__title')

widgetTitles.forEach(function (item) {
    item.addEventListener('click', function() {
// item.nextElementSibling.hidden = true;
item.nextElementSibling.classList.toggle('hidden');
item.classList.toggle('widget__title--active');
    })
})
/*скрытие виджетов*/


/* location - поведение кнопок */
/*клик по кнопке Любая и отключене других*/
const checkBoxAny = document.querySelector('#location-05')
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]')
checkBoxAny.addEventListener('change', function()  {
    if (checkBoxAny.checked) {
        topLocationCheckboxes.forEach(function (item) {
            item.checked = false;
        })
        // checkBoxAny.checked = true;
    }  
})

/*клик по кнопке из верхнего ряда отключает кнопку Любая */

topLocationCheckboxes.forEach(function(item) {
    item.addEventListener('change', function(){
       if (checkBoxAny.checked){
            checkBoxAny.checked = false;
        }

    })
})

/* location - поведение кнопок */


/* кнопка Показать еще */
const btn_showMoreOptions = document.querySelector('.widget__link-show-more')
const hiddenElements = document.querySelector('.widget__hidden-elements')

btn_showMoreOptions.addEventListener('click', function(event){
    event.preventDefault();
    hiddenElements.classList.toggle('hidden')


     if (btn_showMoreOptions.dataset.options == 'hidden') {
        btn_showMoreOptions.dataset.options = 'visible';
        btn_showMoreOptions.innerText = 'Скрыть дополнительные опции';
         } 
    else if (btn_showMoreOptions.dataset.options == 'visible') {
        btn_showMoreOptions.dataset.options = 'hidden';
        btn_showMoreOptions.innerText = 'Показать еще';
     }
})

/* кнопка Показать еще */