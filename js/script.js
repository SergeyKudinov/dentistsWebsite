jQuery(document).ready(function ($) {
    $(".accordion-item_trigger").click(function (j) {
        var dropDown = $(this).closest(".accordion_item").find(".accordion-item_content");
        $(this).closest(".accordion").find(".accordion-item_content").not(dropDown).slideUp();

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).closest(".accordion").find(".accordion-item_trigger.active").removeClass("active");
            $(this).addClass("active");
        }

        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });
});

jQuery(document).ready(function ($) {
    $(".accor_inner-item_trigger").click(function (j) {
        var droDown = $(this).closest(".accor_inner_item").find(".accor_inner-item_content");
        $(this).closest(".accordion-item_content").find(".accor_inner-item_content").not(droDown).slideUp();

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).closest(".accordion-item_content").find(".accor_inner-item_trigger.active").removeClass("active");
            $(this).addClass("active");
        }

        droDown.stop(false, true).slideToggle();
        j.preventDefault();
    });
});

jQuery(document).ready(function ($) {
    $(".doc-drop-box").click(function (j) {

        /* let dropBox = $(this).closest(".doc-accor-item").find(".doc-accor-item"); */

        var droppDown = $(this).closest(".doc-accor-item").find(".doc-drop-content");
        $(this).closest(".doc-drop_content").find(".doc-drop-content").not(droppDown).slideUp();

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).closest(".doc-drop_content").find(".doc-drop-box.active").removeClass("active");
            $(this).addClass("active");
        }

        droppDown.stop(false, true).slideToggle();
        j.preventDefault();
    });
});






// class "doc_z" for start doctors-slider video



// allon4 accordeon

jQuery(document).ready(function ($) {
  $(".faq-acc__title").click(function (j) {
    var dropDown = $(this).closest(".faq-acc__item").find(".faq-acc__panel");
    $(this).closest(".faq-acc").find(".faq-acc__panel").not(dropDown).slideUp();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).closest(".faq-acc").find(".faq-acc__title.active").removeClass("active");
      $(this).addClass("active");
    }

    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
});








function initComparisons() {
    var x, i;
    /*найти все элементы с классом "overlay":*/
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
      /*один раз для каждого элемента "overlay":
        передайте элемент "overlay" в качестве параметра при выполнении функции сравнения изображений:*/
      compareImages(x[i]);
    }
    function compareImages(img) {
      var slider, img, clicked = 0, w, h;
      /*получить ширину и высоту элемента img*/
      w = img.offsetWidth;
      h = img.offsetHeight;
      /*установите ширину элемента img на 50%:*/
      img.style.width = (w / 2) + "px";
      /*создать слайдер:*/
      slider = document.createElement("DIV");
      slider.setAttribute("class", "img-comp-slider");
      /*вставить ползунок*/
      img.parentElement.insertBefore(slider, img);
      /*расположите ползунок посередине:*/
      slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
      /*выполнение функции при нажатии кнопки мыши:*/
      slider.addEventListener("mousedown", slideReady);
      /*и еще одна функция при отпускании кнопки мыши:*/
      window.addEventListener("mouseup", slideFinish);
      /*или прикоснулся (для сенсорных экранов:*/
      slider.addEventListener("touchstart", slideReady);
      /*и выпущенный (для сенсорных экранов:*/
      window.addEventListener("touchstop", slideFinish);
      function slideReady(e) {
        /*предотвратите любые другие действия, которые могут произойти при перемещении по изображению:*/
        e.preventDefault();
        /*теперь ползунок нажат и готов к перемещению:*/
        clicked = 1;
        /*выполнение функции при перемещении ползунка:*/
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
      function slideFinish() {
        /*ползунок больше не нажимается:*/
        clicked = 0;
      }
      function slideMove(e) {
        var pos;
        /*если ползунок больше не нажат, выйдите из этой функции:*/
        if (clicked == 0) return false;
        /*получить х положения курсора :*/
        pos = getCursorPos(e)
        /*не допускайте расположения ползунка вне изображения:*/
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        /*выполните функцию, которая изменит размер наложенного изображения в соответствии с курсором:*/
        slide(pos);
      }
      function getCursorPos(e) {
        var a, x = 0;
        e = e || window.event;
        /*получить x позиции изображения:*/
        a = img.getBoundingClientRect();
        /*вычислите координату х курсора относительно изображения:*/
        x = e.pageX - a.left;
        /*рассмотрим любую прокрутку страницы:*/
        x = x - window.pageXOffset;
        return x;
      }
      function slide(x) {
        /*изменение размера изображения:*/
        img.style.width = x + "px";
        /*расположите ползунок:*/
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
  }



  function openCity(evt, cityName) {
    let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
        tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
        document.getElementById(cityName).style.display = "flex";
        evt.currentTarget.className += " active";
  }



let videoEl = document.getElementById('video1'),
    playBtn = document.getElementById('play1');

    playBtn.addEventListener('click', function () {
        if (videoEl.paused) {
            videoEl.play();
        } else {
            videoEl.pause();
        }
    }, false);
    videoEl.addEventListener('play', function () {
        
         playBtn.classList.add('hidden');
    }, false);
     
videoEl.addEventListener('pause', function () {
 
    playBtn.classList.remove('hidden');
}, false);