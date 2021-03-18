//Получаем элемент фона с деревом
const bgTree = document.querySelector(".background-jpg");
 
//При движении мышью вызываем функцию, которая меняет положение фона
document.addEventListener("mousemove", function (e) { MoveBackground(e); });
 
function MoveBackground(e)
{
   //Рассчитываем, насколько далеко от начала оси находится курсор: 0 - 0, 0.5 - середина экрана, 1 - ширина экрана (например, 1920)
   //Затем умножаем получившееся число на 30 - настолько будет сдвигаться фон
   //Например, если курсор находится посередине страницы (0.5), то при умножении получится 15
   //Далее отнимаем половину от 30, чтобы фон мог двигаться как влево, так и вправо
   let offsetX = (e.clientX / window.innerWidth * 30) - 15;
   let offsetY = (e.clientY / window.innerHeight * 10) - 5;
 
   //Меняем положение фона
   bgTree.setAttribute("style", "right: " + offsetX + "px;" +  "top: " + offsetY + "px;");

}

const header = document.querySelector('header'),
      header_nav = header. querySelector('nav'),
      header_ul = header_nav.querySelector('ul'),
      header_li = header_nav.querySelector('li'),
      burger_menu = document.querySelector('.header__burger'),
      burger_menu_icon = burger_menu.querySelector('.header__burger-middle');

function toggleBurgerMenu() {
  burger_menu_icon.classList.toggle('active');
  header_nav.classList.toggle('active-nav');

  if (burger_menu_icon.classList.value == 'header__burger-middle active') {
      document.querySelector('body').style.overflow="hidden";
  } else {
      document.querySelector('body').style.overflow="auto";
  }
}

burger_menu.addEventListener('click', () => {
  toggleBurgerMenu();
});     


header_nav.addEventListener('click', (e) => {
  const target=e.target;

  if (target.parentElement != header_ul && target != header_ul) {
    toggleBurgerMenu();
  }


});

new Swiper('.main-block__slider', { 
      autoHeight:true,
      loop:true,

      pagination: {
        el:'.swiper-pagination',
        clickable: true
      }
    });

new Swiper('.catalog-slider', { 

      autoHeight:true,
      loop:true,
      pagination: {
        el:'.swiper-pagination',
        clickable: true
      }
    });
