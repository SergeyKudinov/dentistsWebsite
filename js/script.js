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