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

new Swiper('.main-block__slider', { 
    //Авто высота
      autoHeight:true,
    //Стрелки
    /*
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },*/
      //Булеты, навигация, текущее положение
      pagination: {
        el:'.swiper-pagination',
        clickable: true
      }
    });