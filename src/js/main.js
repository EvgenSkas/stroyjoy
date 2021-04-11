import "bootstrap";
import $ from "../local_modules/jquery/dist/jquery.min";

$(document).ready(() => {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  // var forms = document.getElementsByClassName("needs-validation");
  // // Loop over them and prevent submission
  // var validation = Array.prototype.filter.call(forms, function (form) {
  //   form.addEventListener(
  //     "submit",
  //     function (event) {
  //       if (form.checkValidity() === false) {
  //         event.preventDefault();
  //         event.stopPropagation();
  //       }
  //       form.classList.add("was-validated");
  //     },
  //     false
  //   );
  // });

  // console.log('validation', validation)

  $("#form").submit(function (e) {
    e.preventDefault();
    const form = document.getElementById("form");
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      var form_data = $(this).serialize(); // Собираем все данные из формы
      console.log("submit", form_data);
      $.ajax({
        type: "POST", // Метод отправки
        url: "php/send.php", // Путь до php файла отправителя
        data: form_data,
        success: function () {
          console.log("!!!!test");
          // Код в этом блоке выполняется при успешной отправке сообщения
          alert("Ваше сообщение отправлено!");
        },
        error: function (xhr) {
          alert("Ваше сообщение отправлено!");
        },
      });
    }
    form.classList.add("was-validated");
  });

  document.getElementById("menu").onclick = function (event) {
    const aboutUsPosition = document
      .getElementById("about_us_content")
      .getBoundingClientRect().top;
    const servicesPosition = document
      .getElementById("services_content")
      .getBoundingClientRect().top;
    const target = event.target;
    console.log("event.target", target.id);
    switch (target.id) {
      case "menu_services":
        $("html, body").animate({ scrollTop: servicesPosition - 15 }, "slow");
        break;
      case "menu_about":
        $("html, body").animate({ scrollTop: aboutUsPosition - 15 }, "slow");
        break;
    }
    return false;
  };
});
