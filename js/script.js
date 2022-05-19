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






const dropBox = document.querySelectorAll(".doc-accor-item");

dropBox.forEach(item => {
    item.addEventListener('click', () => {
        if(item.classList.contains('doc_active')) {
            item.classList.remove('doc_active')
        } else {
            item.classList.add('doc_active')
        }
    })
})






function openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    // Получить все элементы с class="tabcontent" и скрыть их
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Получить все элементы с class="tablinks" и снять класс "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Показать на текущей вкладке, и добавить класс "active" по ссылке, которая откроется вкладка
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
  }